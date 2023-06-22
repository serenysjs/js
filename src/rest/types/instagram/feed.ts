import type { Endpoint } from '../../endpoints.js';
import type { PostStats } from './posts.js';
import type { Dimensions } from './types.js';
import type { Account as UserAccount } from './user.js';

export type FeedAccount = Pick<UserAccount, 'id' | 'username'>;
export type FeedStats = Pick<PostStats, 'comments' | 'media_count'>;

export interface FeedMedia {
	dimensions: Dimensions;
	url: string;
}

export interface FeedPosts {
	id: string;
	media: FeedMedia[];
	preview_url: string;
	short_code: string;
	stats: FeedStats;
}

export type InstagramFeedEndpoints = Endpoint<
	`/instagram/feed/${string}`,
	{
		account: FeedAccount;
		posts: FeedPosts[];
	}
>;
