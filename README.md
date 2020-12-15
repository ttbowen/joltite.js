# joltite.js

![tests](https://github.com/ttbowen/joltite.js/workflows/tests/badge.svg)
[![@latest](https://img.shields.io/npm/v/joltite.js.svg)](https://www.npmjs.com/package/joltite.js)
![npm bundle size](https://img.shields.io/bundlephobia/minzip/joltite.js)

`joltite.js` is a library for browsers & node that allows you to easily interact with the [Game Jolt API](https://gamejolt.com/game-api).

This library supports version `1.2` of the Game Jolt API and implements user authentication, sessions, scores, trophies, data storage and more.

## Table of Contents

- [Installing](#installing)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Installing

Using npm:

```bash
$ npm install joltite.js
```

Using yarn:

```bash
$ yarn add joltite.js
```

Using unpkg CDN:

```html
<script src="https://unpkg.com/joltite.js@0.3.0/dist/joltite.min.js"></script>
```

## Usage

First you need to create a new `GameJolt` instance:

```ts
import { GameJolt } from 'joltite.js';

const api = new GameJolt({ gameId, privateKey });
```

Then you can call the API endpoints. Below is an example of score fetching:

```ts
const response = await api.scores.fetch();
if (response.success) {
  console.log(response.scores);
}
```

Some endpoints require an authenticated user. Below is an example of user authentication:

```ts
const response = await api.login({ username, token });

if (response.success) {
  // Successfully logged in.
}
```
## Contributing

Feel free to dive in! [Open an issue](https://github.com/ttbowen/joltite.js/issues/new) or submit PRs.

Standard Readme follows the [Contributor Covenant](http://contributor-covenant.org/version/1/3/0/) Code of Conduct.

## License

[MIT](LICENSE) © Thomas Bowen
