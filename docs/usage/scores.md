# Scores

Game Jolt supports multiple online score tables, or scoreboards, per game. You are able to, for example, have a score table for each level in your game, or a table for different scoring metrics.

Score related methods can be accessed from the `GameJolt.scores` property.

## Fetching

Scores from your game's leaderboards can be fetched using the following method:

```js
ScoreManager.fetch(query?: ScoreQuery): Promise<ScoreResponse>
```
The above method has an optional `query` parameter with the following properties: 

| Name         | Type      | Optional | Description                                          |
| -----------  | --------- | -------- | ---------------------------------------------------- |
| `userOnly`   | `boolean` | Yes      | Whether to return user scores only.                  |   
| `tableId`    | `number`  | Yes      | The ID of the score table.                           |
| `limit`      | `number`  | Yes      | The number of scores you'd like to return.           |                                    
| `guest`      | `string`  | Yes      | A guest's name to search scores for.                 |
| `betterThan` | `number`  | Yes      | Fetch only scores better than this score sort value. |
| `worseThan`  | `number`  | Yes      | Fetch only scores worse than this score sort value.  |

These options can be used to return specific scores. If no options are passed all scores will be returned from the primary table.

In the below example only user scores are fetched:

```js
const query = {
  userOnly: true // Exclude guest scores.
};

const response = await api.scores.fetch(query);

if (response.success) {
  console.log(response.scores); // An array of user scores.
}
```

## Adding scores

New scores can be added to a table with the following method:

```js
ScoreManager.add(score: string, sort: number, options?: ScoreOptions): Promise<Response>
```

The first parameter `score` is the value that will appear on the leaderboard. The second parameter `sort` is the value to sort the score by. The third parameter `options` contains the following properties:

| Name         | Type      | Optional | Description                                                    |
| ------------ | --------- | -------- | -------------------------------------------------------------- | 
| `tableID`    | `number`  | Yes      | The ID of the score table to submit to.                        |   
| `guest`      | `string`  | Yes      | The guest's name.                                     |
| `extraData`  | `string`  | Yes      | If there's any extra data you would like to store as a string. |       


Below is an example of adding a user score:

```js
await api.scores.add('100 points', 100);
```

Below is a example of adding a guest score:

```js
const score = '100 points';
const sort = 100;
const options = {
  guest: 'John'
}

await api.scores.add(sore, sort, options);
```

!> Scores are added to the **primary table** if `options.tableID` is not provided.

## Tables

To fetch the high score tables for your game:

```js
const response = await api.scores.tables();

if (response.success) {
  console.log(response.tables); // An array of score tables for your game.
}
```

## Get Rank

To get the rank of a particular score on a score table:

```js
const response = await api.scores.getRank();

if (response.success) {
  console.log(response.rank); // The rank of the score e.g. 5
}
```