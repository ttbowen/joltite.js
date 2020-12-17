# Trophies

Game Jolt allows you to add trophies to your games!

Trophies come in four materials: `bronze`, `silver`, `gold`, and `platinum`. This is to reflect how difficult it is to achieve a trophy. A `bronze` trophy should be easy to achieve, whereas a `platinum` trophy should be very hard to achieve.

On Game Jolt, trophies are always listed in order from easiest to most difficult to achieve.

You can also tag trophies on the site as "secret". A sercet trophy's image and description is not visible until a gamer has achieved it.

Trophy related methods can be accessed from the `GameJolt.trophies` property.

!> Each of the following methods requires an authenticated user.

## Fetch

Fetch all trophies:

```js
const response = await api.trophies.fetch();

if (response.success) {
  console.log(response.trophies);
}
```

Or fetch only **achieved** trophies:

```js
const fetchAchieved = true; // Fetched achieved trophies.
const response = await api.trophies.fetch(fetchAchieved);

if (response.success) {
  console.log(response.trophies);
}
```

Trophies fetched with `TrophyManager.fetch(achieved?: boolean)` are stored in `TrophyManager.fetchedTrophies` so you can access them later.


## Fetch by ID

Fetch a single trophy by ID:

```js
const trophyID = 12345; // The ID of the trophy you'd like to fetch.
const response = await api.trophies.fetchById(trophyID);

if (response.success) {
  console.log(response.trophies);
}
```

Or fetch multiple trophies by ID:

```js
const trophyIDs = [ 12345, 23456 ]; // The IDs of the trophies you'd like to fetch.
const response = await api.trophies.fetchById(trophyIDs);

if (response.success) {
  console.log(response.trophies);
}
```

## Achieve a trophy 

Set a trophy as achieved for the current user:

```js
const trophyID = 12345; // The ID of the trophy to add as achieved.
const response = await api.trophies.addAchieved(trophyID);

if (response.success) {
  // Successfully added.
}
```

## Remove achieved trophy

To remove an achieved trophy for the current user:


```js
const trophyID = 12345; // The ID of the trophy to remove as achieved.
const response = await api.trophies.removeAchieved(trophyID);

if (response.success) {
  // Successfully removed.
}
```
