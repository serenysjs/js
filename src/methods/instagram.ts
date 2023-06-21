import { method } from './create.js';

export const instagram = method((client) => ({
	users: {
		async get(userName: string) {
			const { ...data } = await client.get(`/instagram/users/${userName}`);

			return data;
		},
	},

	posts: {
		async get(postId: string) {
			const { ...data } = await client.get(`/instagram/posts/${postId}`);

			return data;
		},
	},

	feed: {
		async get(userName: string) {
			const { ...data } = await client.get(`/instagram/feed/${userName}`);

			return data;
		},
	},
}));
