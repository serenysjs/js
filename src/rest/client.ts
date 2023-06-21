import { URL } from 'node:url';
import { fetch, Headers, Request } from '../util/fetch.js';
import type { Method } from '../util/types.js';
import type { APIResponse, Endpoints, ErroredAPIResponse } from './endpoints.js';

export type ExtractEndpoint<Method extends string, Path extends string> = Extract<
	Endpoints,
	{ method: Method; path: Path }
>;

export type PathsFor<M extends Method> = Extract<Endpoints, { method: M }>['path'];

export interface APIClientOptions {
	readonly baseUrl: string;
}

export class SerenysAPIError extends Error {
	public readonly status: number;

	public constructor(
		public readonly request: Request,
		public readonly response: Response,
		public readonly data: ErroredAPIResponse,
	) {
		super(data.message);

		this.status = response.status;
	}
}

export class APIClient {
	// @ts-expect-error - This is private
	private readonly options;

	public readonly url;

	public constructor(options: APIClientOptions) {
		this.options = options;
		this.url = options.baseUrl;
	}

	public async get<Path extends PathsFor<'GET'>>(path: Path, init?: RequestInit) {
		return this.request<Extract<Endpoints, { method: 'GET'; path: Path }>['res']>('GET', path, init);
	}

	private async executeRequest<T>(request: Request): Promise<T> {
		const response = await fetch(request, {
			keepalive: true,
		});

		if (response.status === 204 || !response.headers.get('Content-Type')?.includes('application/json')) {
			return undefined as unknown as T;
		}

		const result = await (response.json() as Promise<APIResponse>).catch((error: Error): ErroredAPIResponse => {
			return {
				message: error.message,
				status: 500,
				type: 'Internal Server Error',
			};
		});

		if (!result) {
			throw new SerenysAPIError(request, response, result);
		}

		return result as unknown as T;
	}

	private async request<T>(method: Method, path: string, init: RequestInit = {}) {
		const url = new URL(`${this.url}${path}`);

		const headers = new Headers({
			...init?.headers,
		});

		const request = new Request(url, {
			method,
			headers,
			...init,
		});

		return this.executeRequest<T>(request);
	}
}
