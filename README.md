## About

This is a powerful and official [Node.js](https://nodejs.org) module that allows you to easily interact with the [Serenys API](https://serenys.xyz).

- Object-oriented
- Performant
- 100% coverage of the Serenys API

## Installation

**Node.js 16.9.0 or newer is required.**

```sh
npm install serenys
yarn add serenys
pnpm add serenys
```

## Example usage

Get a discord user's information:

```js
import { Serenys } from 'serenys';
const client = new Serenys();

try {
	const data = await client.discord.users.get('299262860440371202');

	console.log(data);
} catch (error) {
	console.error(error);
}
```

Get a Instagram user's information:

```js
import { Serenys } from 'serenys';
const client = new Serenys();

try {
	const data = await client.instagram.users.get('hhh.e_c.v');

	console.log(data);
} catch (error) {
	console.error(error);
}
```

## Links

- [Documentation][documentation]
- [Serenys Discord server][discord]
- [GitHub][source]
- [npm][npm]

## Help

If you don't understand something in the documentation, you are experiencing problems, or you just need a gentle nudge in the right direction, please don't hesitate to join our official [Serenys Server][discord].

[documentation]: https://docs.serenys.xyz
[discord]: https://discord.gg/discloud
[source]: https://github.com/serenysjs/js
[npm]: https://www.npmjs.com/package/serenys
