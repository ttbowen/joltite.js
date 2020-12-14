import { BaseManager } from './BaseManager';
import { Endpoints } from '../util/constants';
import { FriendsResponse } from '../types/responses/FriendsResponse';

/**
 * Manager responsible for managing the API methods of user friends.
 */
export class FriendsManager extends BaseManager {
  /**
   * Returns the list of a user's friends.
   */
  async fetch(): Promise<FriendsResponse> {
    const { username, token } = this.client.authCredentials;
    const response = (await this.request(
      Endpoints.friends.fetch(username, token)
    )) as FriendsResponse;

    return response;
  }
}
