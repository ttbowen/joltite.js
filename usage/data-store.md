# Data Storage

A cloud-based data storage system. It's completely up to you what you use this for. The more inventive the better!

Data storage methods can be accessed from the `GameJolt.dataStorage` property.

## Fetch

Fetch item from the **global** data store:

```js
const key = 'key'; // The name of the key you want to fetch.
const response = await api.dataStorage.fetch(key);

if (response.success) {
  console.log(response.data); // The data store value.
}
```

Fetch item from the **user** data store:

```js
const key = 'key'; // The name of the key you want to fetch.
const user = true; // Fetch from the user store.
const response = await api.dataStorage.fetch(myKey, userStore);

if (response.success) {
  console.log(response.data); // The data store value.
}
```

## Fetch Keys

You may want to return the names of the keys in your data stores. To fetch all keys from your game's global data store:

```js
const response = await api.dataStorage.getKeys();

if (response.success) {
  console.log(response.keys); // Example output: [ { key: 'key' } ]
}
```

To fetch all **user** data store keys:

```js
const user = true; // Fetch user keys.

const response = await api.dataStorage.getKeys(user);

if (response.success) {
  console.log(response.keys); // Example output: [ { key: 'key' } ]
}
```

You can also find keys with a pattern. If you apply a pattern to the request, only keys with applicable key names will be returned. The placeholder character for patterns is `*`.

Below is an example of pattern matching:

```js
const user = false; // Fetch global keys.
const pattern = 'save*'; // The pattern of the keys to search for.

const response = await api.dataStorage.getKeys(user, pattern);

if (response.success) {
  console.log(response.keys); // Example output: [ { key: 'save' }, { key: 'savers' } ]
}
```

## Set

To set a new value in the data store:

```js
const myKey = 'myKey';
const myData = 'My data to set.';
const user = false;

const response = await gamejolt.dataStorage.set(myKey, myData, user);

if (response.success) {
  // Successfully added data to global store.
}
```

The above example sets a data store item with the key `myKey` in the global data store.
If you want to set a user data store item you would set `user` to `true`.

## Update

To update an existing item in your game's data store:

```js
const key = 'items'; // The key of the item to update.
const value = 10; // The value to update with.
const operation = DataStoreOperations.Add; // The operation of the update.
const user = true; // Update the user data store.

// Add 10 to the existing value in 'items'.
const response = await gamejolt.dataStorage.update(key, value, operation, user);

if (response.success) {
  console.log(response.data); // Contains the new value.
}
```

The `DataStoreOperations` enum contains the following operations:

- `Add` - Adds the `value` to the current data store item.
- `Subtract` - Substracts the `value` from the current data store item.
- `Multiply` - Multiplies the `value` by the current data store item.
- `Divide` - Divides the current data store item by the `value`.
- `Append` - Appends the `value` to the current data store item.
- `Prepend` - Prepends the `value` to the current data store item.

## Remove

To remove an existing data store item:

```js
const key = "key"; // The key to remove.
const user = true; // Remove from the user data store.

const response = await gamejolt.dataStorage.remove(key, user);

if (response.success) {
  // Successfully removed data store item.
}
```


