import { method } from './create.js';

export const discord = method((client) => ({
	users: {
		async get(userId: string) {
			const { ...data } = await client.get(`/discord/users/${userId}`);

			return data;
		},
	},
	invites: {
		async get(inviteCode: string) {
			const { ...data } = await client.get(`/discord/invites/${inviteCode}`);

			return data;
		},
	},
}));
