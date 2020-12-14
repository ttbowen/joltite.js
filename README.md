# joltite.js

[![@latest](https://img.shields.io/npm/v/joltite.js.svg)](https://www.npmjs.com/package/joltite.js)
![tests](https://github.com/ttbowen/joltite.js/workflows/tests/badge.svg)


joltite.js is a library that allows you to easily interact with the [Game Jolt API](https://gamejolt.com/game-api).

## Usage

<table>
<tbody valign=top align=left>
<tr><th>
Browsers
</th><td width=100%>
        
```html
<script src="https://unpkg.com/joltite.js@0.3.0/dist/joltite.min.js"></script>
```

</td></tr>
<tr><th>
Node
</th><td>

Install with <code>yarn add joltite.js</code> or <code>npm install joltite.js</code>

```js
const { GameJolt } = require('joltite.js');
```

</td></tr>
</tbody>
</table>

## Example

```js
const gamejolt = new GameJolt({
  gameId: 486477,
  privateKey: 'super_secret_key',
});

const response = await gamejolt.login({
  username: 'ttbowen',
  token: 'abc123',
});

if (response.success) {
  console.log(
    `Successfully logged in as ${gamejolt.authCredentials.username}!`
  );
}
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.