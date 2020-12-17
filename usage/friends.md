# Friends

You can get information about users friends on Game Jolt.

Example uses include:

- List and count friends.
- Find currently online friends.

To fetch a user's friend list:

```js
const response = await api.friends.fetch();

if (response.success) {
  console.log(response.friends); // Example output: [{ friend_id: '15071' }]
}
```
