import { method } from './create.js';

export const discord = method((client) => ({
	users: {
		async get(userId: string) {
			return client.get(`/discord/users/${userId}`);
		},
	},
	invites: {
		async get(inviteCode: string) {
			return client.get(`/discord/invites/${inviteCode}`);
		},
	},
}));
