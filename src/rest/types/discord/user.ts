import type { Endpoint } from '../../endpoints.js';

export type UserBadges =
	| 'ActiveDeveloper'
	| 'ApplicationAutoModerationRuleCreateBadge'
	| 'ApplicationCommandBadge'
	| 'BoostLevel1'
	| 'BoostLevel2'
	| 'BoostLevel4'
	| 'BoostLevel5'
	| 'BoostLevel6'
	| 'BoostLevel7'
	| 'BoostLevel7'
	| 'BoostLevel8'
	| 'BoostLevel9'
	| 'BugHunterLevel1'
	| 'BugHunterLevel2'
	| 'CertifiedModerator'
	| 'Hypesquad'
	| 'HypeSquadOnlineHouse1'
	| 'HypeSquadOnlineHouse2'
	| 'HypeSquadOnlineHouse3'
	| 'LegacyUsernameBadge'
	| 'Nitro'
	| 'Partner'
	| 'PremiumEarlySupporter'
	| 'Staff'
	| 'VerifiedBot'
	| 'VerifiedDeveloper';

export interface User {
	discriminator: string;
	global_name: string;
	id: string;
	premium_since: Date | null;
	premium_type: PremiumType | null;
	tag: string;
	username: string;
}

export interface UserProfile {
	about_me: string | null;
	avatar_url: string | null;
	badges_array: UserBadges[];
	banner_url: string | null;
}

export interface Boost {
	current_level: string;
	current_level_date: Date;
	next_level: string;
	next_level_date: Date;
}

export interface ConnectedAccount {
	id: string | null;
	metadata: {
		[key: string]: boolean | number | string | null;
	};
	name: string | null;
	type: string | null;
	verified: boolean | null;
}

export enum PremiumType {
	BASIC = 'Basic',
	CLASSIC = 'Classic',
	NITRO = 'Nitro',
}

export type DiscordUserEndpoints = Endpoint<
	`/discord/users/${string}`,
	{
		boost: Boost | null;
		connected_accounts: ConnectedAccount[];
		legacy_username: string | null;
		user: User;
		user_profile: UserProfile;
	}
>;
