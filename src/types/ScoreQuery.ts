/**
 * Options for querying scores.
 */
export interface ScoreQuery {
  /**
   * Whether to return user scores only.
   */
  userOnly?: boolean;

  /**
   * The ID of the score table.
   */
  tableId?: number;

  /**
   * The number of scores you'd like to return.
   */
  limit?: number;

  /**
   * A guest's name to search scores for.
   */
  guest?: string;

  /**
   * Fetch only scores better than this score sort value.
   */
  betterThan?: number;

  /**
   * Fetch only scores worse than this score sort value.
   */
  worseThan?: number;
}
