import { UserTypes } from '../UserTypes';
import { UserStatuses } from '../UserStatuses';

/**
 * Represents a Game Jolt user.
 */
export interface User {
  /**
   * The ID of the user.
   */
  id: string;

  /**
   * The type of user. Can be User, Developer, Moderator, or Administrator.
   */
  type: UserTypes;

  /**
   * The user's username.
   */
  username: string;

  /**
   * The URL of the user's avatar.
   */
  avatar_url: string;

  /**
   * How long ago the user signed up.
   */
  signed_up: string;

  /**
   * The timestamp (in seconds) of when the user signed up.
   */
  signed_up_timestamp: number;

  /**
   * How long ago the user was last logged in. Will be Online Now if the user is currently online.
   */
  last_logged_in: string;

  /**
   * The timestamp (in seconds) of when the user was last logged in.
   */
  last_logged_in_timestamp: number;

  /**
   * Active if the user is still a member of the site. Banned if they've been banned.
   */
  status: UserStatuses;

  /**
   * The user's display name.
   */
  developer_name: string;

  /**
   * The user's website (or empty string if not specified)
   */
  developer_website: string;

  /**
   * The user's profile markdown description.
   */
  developer_description: string;
}
