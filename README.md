# Welcome

## Installation

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
<script src="https://unpkg.com/joltite.js@1.0.0/dist/joltite.min.js"></script>
```

## Basic Usage

First you need to create a new `GameJolt` instance:

```js
import { GameJolt } from 'joltite.js';
// CommonJS: const { GameJolt } = require('joltite.js');

const gameId = 12345; // Your game ID.
const privateKey = 'YOUR_PRIVATE_KEY'; // Your private key.

const api = new GameJolt({ gameId, privateKey });
```

Then you can call the API endpoints. Below is an example of score fetching:

```js
const response = await api.scores.fetch();
if (response.success) {
  console.log(response.scores);
}
```

Some endpoints require an authenticated user. Below is an example of user authentication:

```js
const response = await api.login({ username, token });

if (response.success) {
  // Successfully logged in.
}
```
