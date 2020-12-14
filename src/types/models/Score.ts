/**
 * Represents a Game Jolt score.
 */
export interface Score {
  /**
   * The score string.
   */
  score: string;

  /**
   * The score's numerical sort value.
   */
  sort: string;

  /**
   * Any extra data associated with the score.
   */
  extra_data: string;

  /**
   * If this is a user score, this is the display name for the user.
   */
  user: string;

  /**
   * If this is a user score, this is the user's ID.
   */
  user_id: string;

  /**
   * If this is a guest score, this is the guest's submitted name.
   */
  guest: string;

  /**
   * Returns when the score was logged by the user.
   */
  stored: string;

  /**
   * Returns the timestamp (in seconds) of when the score was logged by the user.
   */
  stored_timestamp: number;
}
