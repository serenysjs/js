import type { Endpoint } from '../../endpoints';

export interface Account {
	bio: string | null;
	business: boolean;
	full_name: string | null;
	id: string;
	private: boolean;
	username: string;
	verified: boolean;
	website: string | null;
}

export interface AccountFollowers {
	formatted: string;
	total: number;
}

export interface AccountFollowing {
	formatted: string;
	total: number;
}

export interface AccountStats {
	followers: AccountFollowers;
	following: AccountFollowing;
	posts_count: number;
}

export type InstagramUserEndpoints = Endpoint<
	`/instagram/users/${string}`,
	{
		account: Account;
		stats: AccountStats;
	}
>;
