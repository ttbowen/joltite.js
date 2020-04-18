import { UserTypes } from '../UserTypes.js';
import { UserStatuses } from '../UserStatuses.js';

/**
 * Represents a Game Jolt user.
 */
export interface User {
  id: string;
  type: UserTypes;
  username: string;
  avatar_url: string;
  signed_up: string;
  signed_up_timestamp: number;
  last_logged_in: string;
  last_logged_in_timestamp: number;
  status: UserStatuses;
  developer_name: string;
  developer_website: string;
  developer_description: string;
}
