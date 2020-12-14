import { BaseManager } from './BaseManager';
import { Endpoints } from '../util/constants';
import { Response } from '../types/responses/Response';
import { TrophyResponse } from '../types/responses/TrophyResponse';
import { Trophy } from '../types/models/Trophy';

/**
 * Manager responsible for managing the API methods of trophies.
 */
export class TrophyManager extends BaseManager {
  /**
   * Trophies returned from the API. Populated when {@link TrophyManager#fetch} is called.
   */
  fetchedTrophies: Trophy[] = [];

  /**
   * Returns one trophy or multiple trophies.
   *
   * @param [achieved] Whether to fetch only achieved trophies.
   */
  async fetch(achieved?: boolean): Promise<TrophyResponse> {
    const { username, token } = this.client.authCredentials;
    let endpoint = Endpoints.trophies.fetch(username, token);

    if (achieved) {
      endpoint += `&achieved=${achieved}`;
    }

    const response = (await this.request(endpoint)) as TrophyResponse;

    if (response && response.trophies) {
      this.fetchedTrophies = response.trophies;
    }

    return response;
  }

  /**
   * Returns one trophy or multiple trophies by Id.
   *
   * @param trophyIds The IDs of the trophies to fetch.
   */
  async fetchById(trophyIds: number | number[]): Promise<TrophyResponse> {
    const { username, token } = this.client.authCredentials;
    const ids = typeof trophyIds === 'number' ? [trophyIds] : trophyIds;

    const response = (await this.request(
      `${Endpoints.trophies.fetch(username, token)}&trophy_id=${ids.join()}`
    )) as TrophyResponse;

    return response;
  }

  /**
   * Sets a trophy as achieved for a particular user.
   *
   * @param trophyId The ID of the trophy to add for the user.
   */
  async addAchieved(trophyId: number): Promise<Response> {
    const { username, token } = this.client.authCredentials;
    const response = (await this.request(
      `${Endpoints.trophies.add(username, token, trophyId)}`
    )) as Response;

    return response;
  }

  /**
   * Remove a previously achieved trophy for a particular user.
   *
   * @param trophyId The ID of the trophy to remove from the user.
   */
  async removeAchieved(trophyId: number): Promise<Response> {
    const { username, token } = this.client.authCredentials;
    const response = (await this.request(
      `${Endpoints.trophies.remove(username, token, trophyId)}`
    )) as Response;

    return response;
  }
}
