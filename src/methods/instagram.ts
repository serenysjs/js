import { method } from './create.js';

export const instagram = method((client) => ({
	users: {
		async get(userName: string) {
			return client.get(`/instagram/users/${userName}`);
		},
	},

	posts: {
		async get(postId: string) {
			return client.get(`/instagram/posts/${postId}`);
		},
	},

	feed: {
		async get(userName: string) {
			return client.get(`/instagram/feed/${userName}`);
		},
	},
}));
