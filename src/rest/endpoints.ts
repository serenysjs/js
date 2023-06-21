import type { DiscordInviteEndpoints, DiscordUserEndpoints } from './types/discord/index.js';
import type {
	InstagramFeedEndpoints,
	InstagramPostsEndpoints,
	InstagramUserEndpoints,
} from './types/instagram/index.js';

export interface SuccessfulAPIResponse {
	api: {
		status: number;
		support_server: string;
		type: string;
	};
}

export interface ErroredAPIResponse {
	message: string;
	status: number;
	type: string;
}

export type APIResponse = ErroredAPIResponse | SuccessfulAPIResponse;

export interface Endpoint<Path extends string, Res> {
	path: Path;
	res: Res;
}

export type Endpoints =
	| DiscordInviteEndpoints
	| DiscordUserEndpoints
	| InstagramFeedEndpoints
	| InstagramPostsEndpoints
	| InstagramUserEndpoints;
