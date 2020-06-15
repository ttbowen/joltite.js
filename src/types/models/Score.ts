/**
 * Represents a Game Jolt score.
 */
export interface Score {
  score: string;
  sort: string;
  extra_data: string;
  user: string;
  user_id: string;
  guest: string;
  stored: string;
  stored_timestamp: number;
}
