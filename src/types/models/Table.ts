/**
 * Represents a Game Jolt score table.
 */
export interface Table {
  /**
   * The ID of the score table.
   */
  id: string;

  /**
   * The developer-defined name of the score table.
   */
  name: string;

  /**
   * The developer-defined description of the score table.
   */
  description: string;

  /**
   * Whether or not this is the default score table.
   * Scores are submitted to the primary table by default.
   */
  primary: string;
}
