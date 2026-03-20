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
   * Fetches a user by their ID or username.
   * You can also fetch multiple users by providing an array of IDs.
   * @param userIdsOrUsername The ID(s) or username of the user(s) to fetch.
   * @returns A promise that resolves to the user response.
   */
  async fetch(
    userIdsOrUsername: string | number | number[]
  ): Promise<UserResponse> {
    const endpoint =
      typeof userIdsOrUsername === 'string'
        ? Endpoints.users.fetchByUsername(userIdsOrUsername)
        : Endpoints.users.fetch(
            typeof userIdsOrUsername === 'number'
              ? [userIdsOrUsername]
              : userIdsOrUsername
          );

    const response = (await this.request(endpoint)) as UserResponse;

    return response;
  }
}
