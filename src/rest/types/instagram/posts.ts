import type { Endpoint } from '../../endpoints.js';
import type { Dimensions, TotalAndFormatted } from './types.js';
import type { Account as UserAccount } from './user.js';

export type PostAccount = Pick<UserAccount, 'full_name' | 'username'>;

export interface Post {
	created_at: Date;
	description: string;
	id: string;
}

export interface PostStats {
	comments: TotalAndFormatted;
	likes: TotalAndFormatted;
	media_count: number;
}

export interface PostMedia {
	dimensions: Dimensions;
	id: string;
	type: string;
	url: string;
}

export type InstagramPostsEndpoints = Endpoint<
	`/instagram/posts/${string}`,
	{
		account: PostAccount;
		media: PostMedia[];
		post: Post;
		stats: PostStats;
	}
>;
