import { Response } from '../types/responses/Response';
import { Endpoints } from '../util/constants';
import { BaseManager } from './BaseManager';
import { AuthCredentials } from '../types/AuthCredentials';
import { UserResponse } from '../types/responses/UserResponse';

/**
 * Manager responsible for managing the API methods of users.
 */
export class UserManager extends BaseManager {
  /**
   * Authenticates the user's information.
   * This should be done before you make any calls for the user,
   * to make sure the user's credentials (username and token) are valid.
   *
   * @param authCredentials The credentials required to authenticate a user.
   */
  async auth(authCredentials: AuthCredentials): Promise<Response> {
    const { username, token } = authCredentials;
    const response = (await this.request(
      Endpoints.users.auth(username, token)
    )) as Response;

    return response;
  }

  /**
   * Returns a user's data.
   *
   * @param users The ids of the users to fetch.
   */
  async fetch(users: number | number[]): Promise<UserResponse> {
    const ids = typeof users === 'number' ? [users] : users;

    const response = (await this.request(
      Endpoints.users.fetch(ids)
    )) as UserResponse;

    return response;
  }
}
