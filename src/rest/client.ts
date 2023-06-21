import { URL } from 'node:url';
import { fetch, Request } from '../util/fetch.js';
import type { APIResponse, Endpoints, ErroredAPIResponse } from './endpoints.js';

export type ExtractEndpoint<Path extends string> = Extract<Endpoints, { path: Path }>;

export type PathsFor = Endpoints['path'];

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
	public readonly url;

	public constructor() {
		this.url = 'https://serenys.xyz/api';
	}

	public async get<Path extends PathsFor>(path: Path) {
		return this.request<Extract<Endpoints, { path: Path }>['res']>(path);
	}

	private async executeRequest<T>(request: Request): Promise<T> {
		const response = await fetch(request, {
			keepalive: true,
		});

		if (response.status === 204) {
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

	private async request<T>(path: string) {
		const url = new URL(`${this.url}${path}`);

		const request = new Request(url);

		return this.executeRequest<T>(request);
	}
}
