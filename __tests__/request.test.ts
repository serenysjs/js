import { describe, expect, test } from 'vitest';
import { Serenys } from '../src/index.js';

const serenys = new Serenys();

describe('Request', () => {
	test('The HTTP Client should make a request', async () => {
		// @ts-expect-error - This is a url for testing
		const response = await serenys.client.get('https://httpbin.org/get');
		console.log(response);

		expect(response).toBeDefined();
	});

	test('Get a Discord user', async () => {
		const response = await serenys.discord.users.get('764624695169384478');
		console.log(response);

		expect(response).toBeDefined();
	});

	test('Get a Discord invite', async () => {
		const response = await serenys.discord.invites.get('discloud');
		console.log(response);

		expect(response).toBeDefined();
	});

	test('Get an Instagram user', async () => {
		const response = await serenys.instagram.users.get('linntwc');
		console.log(response);

		expect(response).toBeDefined();
	});

	test('Get an Instagram post', async () => {
		const response = await serenys.instagram.posts.get('CtbFmetOjro');
		console.log(response);

		expect(response).toBeDefined();
	});

	test("Get an Instagram user's feed", async () => {
		const response = await serenys.instagram.feed.get('nayeonyny');
		console.log(response);

		expect(response).toBeDefined();
	});
});
