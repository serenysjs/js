import type { APIClient } from '../rest/index.js';

export function method<T>(builder: (client: APIClient) => T) {
	return builder;
}
