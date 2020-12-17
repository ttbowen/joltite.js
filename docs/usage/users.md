# Users

Your games will not authenticate users by using their username and password. Instead, users have a `token` to verify themselves along with their username.

## Login

To login as a Game Jolt user:

```js
const username = 'ttbowen';
const token = 'abc123';

const response = await api.login({ username, token });

// Check if the login was successful
if (response.success) {
  console.log(`Successfully logged in as ${username}!`);
}
```

If the request is successful a game session will be opened for that user. Also the `username` and `token` will be saved in `GameJolt.authCredentials`.

## Logout

To logout as a Game Jolt user:

```js
const response = await api.logout();

if (response.success) {
  console.log('Successfully logged out!');
}
```

If the request is successful the game session will be closed. Also the `username` and `token` will be reset in `GameJolt.authCredentials`.

## Fetch

To fetch a user by ID:

```js
  const userId = 15071; // The ID of the user to fetch.
  const response = await gamejolt.users.fetch(userId);

  if (response.success) {
    console.log(response.users);
  }
}
```

To fetch multiple users by ID:

```js
  const userIds = [ 15071, 1329934 ]; // The IDs of the users to fetch.
  const response = await gamejolt.users.fetch(userIds);

  if (response.success) {
    console.log(response.users);
  }
}
```
