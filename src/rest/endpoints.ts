import type { DiscordInviteEndpoints, DiscordUserEndpoints } from './types/discord/index.js';
import type { Method } from './types/index.js';
import type { InstagramFeedEndpoints } from './types/instagram/feed.js';
import type { InstagramPostsEndpoints } from './types/instagram/posts.js';
import type { InstagramUserEndpoints } from './types/instagram/user.js';

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

export interface Endpoint<M extends Method, Path extends string, Res, Body = undefined> {
	body: Body;
	method: M;
	path: Path;
	res: Res;
}

export type Endpoints =
	| DiscordInviteEndpoints
	| DiscordUserEndpoints
	| InstagramFeedEndpoints
	| InstagramPostsEndpoints
	| InstagramUserEndpoints;
