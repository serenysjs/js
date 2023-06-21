import { discord, instagram } from './methods/index.js';
import { APIClient } from './rest/client.js';

export class Serenys {
	public readonly client: APIClient;

	public readonly discord: ReturnType<typeof discord>;

	public readonly instagram: ReturnType<typeof instagram>;

	public constructor() {
		this.client = new APIClient();

		this.discord = discord(this.client);
		this.instagram = instagram(this.client);
	}
}
