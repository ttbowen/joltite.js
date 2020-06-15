/**
 * Options for score requests.
 */
export interface ScoreOptions {
  /**
   * If there's any extra data you would like to store as a string, you can use this variable.
   */
  extraData?: string;

  /**
   * The ID of the score table to submit to.
   */
  tableId?: number;

  /**
   * The guest's name.
   */
  guest?: string;
}
