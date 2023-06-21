import type { Endpoint } from '../../endpoints';
import type { Account as UserAccount } from './user.js';

export type PostAccount = Pick<UserAccount, 'full_name' | 'username'>;

export interface Post {
	created_at: Date;
	description: string;
	id: string;
}

export interface Likes {
	formatted: string;
	total: number;
}

export interface Comments {
	formatted: string;
	total: number;
}

export interface PostStats {
	comments: Comments;
	likes: Likes;
	media_count: number;
}

export interface PostDimensions {
	height: number;
	width: number;
}

export interface PostMedia {
	dimensions: PostDimensions;
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
