import { Response } from './Response';

/**
 * Represents a friends response returned from the API.
 */
export interface FriendsResponse extends Response {
  /**
   * The user's friends.
   */
  friends: { friend_id: string }[];
}
