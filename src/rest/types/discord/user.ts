import type { Endpoint } from '../../endpoints.js';

export interface User {
	discriminator: string;
	global_name: string;
	id: string;
	premium_since?: Date | null;
	premium_type: PremiumType;
	tag: string;
	username: string;
}

export interface UserProfile {
	about_me?: string | null;
	avatar_url?: string | null;
	badges_array: string[];
	banner_url?: string | null;
}

export interface Boost {
	current_level: string;
	current_level_date: Date;
	next_level: string;
	next_level_date: Date;
}

export interface ConnectedAccount {
	id?: string;
	metadata?: {
		[key: string]: boolean | number | string;
	};
	name?: string;
	type?: string;
	verified?: boolean;
}

export enum PremiumType {
	BASIC = 'Basic',
	CLASSIC = 'Classic',
	NITRO = 'Nitro',
	NONE = 'None',
}

export type DiscordUserEndpoints = Endpoint<
	`/discord/users/${string}`,
	{
		boost?: Boost | null;
		connected_accounts: ConnectedAccount[];
		legacy_username: string | null;
		user: User;
		user_profile: UserProfile;
	}
>;
