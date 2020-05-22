# joltite.js

[![@latest](https://img.shields.io/npm/v/joltite.js.svg)](https://www.npmjs.com/package/joltite.js)
![tests](https://github.com/ttbowen/joltite.js/workflows/tests/badge.svg)
[![Coverage Status](https://coveralls.io/repos/github/ttbowen/joltite.js/badge.svg?branch=master)](https://coveralls.io/github/ttbowen/joltite.js?branch=master)


joltite.js is a library that allows you to easily interact with the [Game Jolt API](https://gamejolt.com/game-api).

## Usage

<table>
<tbody valign=top align=left>
<tr><th>
Browsers
</th><td width=100%>
        
```html
<script src="https://unpkg.com/joltite.js@0.1.0/dist/joltite.min.js"></script>
```

</td></tr>
<tr><th>
Node
</th><td>

Install with <code>yarn add joltite.js</code> or <code>npm install joltite.js

```js
const { GameJolt } = require('joltite.js');
```

</td></tr>
</tbody>
</table>

## Example

```js
const gamejolt = new GameJolt({
  gameId: 1234,
  privateKey: 'super_secret_key'
});

await gamejolt.login({
  username: 'ttbowen',
  token: 'abc123'
});
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.