# Time

You can obtain time information from the Game Jolt server.

To fetch the Game Jolt server time:

```js
const response = await api.time.fetch();

if (response.success) {
  console.log(response);
}
```

The output from the above example:

```js
{
  success: true,
  timestamp: 1608158057,
  timezone: 'America/New_York',
  year: '2020',
  month: '12',
  day: '16',
  hour: '17',
  minute: '34',
  second: '17'
}
```
