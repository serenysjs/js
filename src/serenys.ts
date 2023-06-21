import { discord, instagram } from './methods/index.js';
import { APIClient } from './rest/client.js';
import { DEFAULT_BASE_URL } from './util/constants.js';

export class Serenys {
	public readonly client: APIClient;

	public readonly discord: ReturnType<typeof discord>;

	public readonly instagram: ReturnType<typeof instagram>;

	public constructor(baseUrl = DEFAULT_BASE_URL) {
		this.client = new APIClient({ baseUrl });

		this.discord = discord(this.client);
		this.instagram = instagram(this.client);
	}
}
