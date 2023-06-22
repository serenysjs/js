import type { Endpoint } from '../../endpoints.js';
import type { TotalAndFormatted } from './types.js';

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

export interface AccountStats {
	followers: TotalAndFormatted;
	following: TotalAndFormatted;
	posts_count: number;
}

export type InstagramUserEndpoints = Endpoint<
	`/instagram/users/${string}`,
	{
		account: Account;
		stats: AccountStats;
	}
>;
