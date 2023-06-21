# Serenys

Serenys server side client library in JavaScript for Node.js

## Installation

### Requirements

- Node.js 16.9.0 or newest

> Using NPM:

```bash
$ npm install serenys
```

> Using YARN:

```bash
$ yarn add serenys
```

> Using PNPM:

```bash
$ pnpm install serenys
```

# Usage

- Fetching a Discord User's Information

### CommonJS

```javascript
const { Serenys } = require('serenys');

async function fetchUserInfo(userId) {
	const client = new Serenys();
	const data = await client.users.get(userId);

	return console.log(data);
}

fetchUserInfo('764624695169384478');
```

### ESModules

> You can use TypeScript too.

```javascript
import { Serenys } from "serenys";

async fetchUserInfo(userId) {
    const client = new Serenys();
    const data = await client.users.get(userId);

    return console.log(data);
}

fetchUserInfo("764624695169384478");
```

## FAQ

#### I have an error / I don't know how to use it, where do I ask for support?

You can find our support by joining our [official Discord server](https://discord.com/invite/discloud).

## License

This repository uses the APACHE-2.0 license. [Read more](https://www.apache.org/licenses/LICENSE-2.0)
