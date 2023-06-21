import type { Endpoint } from '../../endpoints';

export interface Invite {
	channel: Channel;
	code: string;
}

export interface Channel {
	id: string;
	name: string;
	type: string;
}

export interface Guild {
	boosts_count: number;
	description: string;
	id: string;
	name: string;
	nsfw: boolean;
	nsfw_level: number;
	online_members: number;
	total_members: number;
	vanity_url: string;
}

export interface GuildAssets {
	banner_url: string;
	icon_url: string;
	splash_url: string;
}

export type DiscordInviteEndpoints = Endpoint<
	`/discord/invites/${string}`,
	{
		guild: Guild;
		guild_assets: GuildAssets;
		invite: Invite;
	}
>;
