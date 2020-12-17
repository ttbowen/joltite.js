import { BaseManager } from './BaseManager';
import { Endpoints } from '../util/constants';
import { Response } from '../types/responses/Response';
import { DataStoreItemResponse } from '../types/responses/DataStoreItemResponse';
import { DataStoreOperations } from '../types/DataStoreOperations';
import { DataStoreKeysResponse } from '../types/responses/DataStoreKeysResponse';

/**
 * Manager responsible for managing the API methods of data storage.
 */
export class DataStoreManager extends BaseManager {
  /**
   * Returns data from the data store.
   *
   * @param key The key of the data item you'd like to fetch.
   * @param [user] Whether to fetch user data store item.
   */
  async fetch(key: string, user?: boolean): Promise<DataStoreItemResponse> {
    const { username, token } = this.client.authCredentials;
    let endpoint = Endpoints.dataStorage.fetch(key);

    if (user) {
      endpoint += `&username=${username}&user_token=${token}`;
    }

    const response = (await this.request(endpoint)) as DataStoreItemResponse;

    return response;
  }

  /**
   * Sets data in the data store.
   *
   * @param key The key of the data item you'd like to set.
   * @param data The data you'd like to set.
   * @param [user] Whether to set a user data store item.
   */
  async set(
    key: string,
    data: string | number,
    user?: boolean
  ): Promise<Response> {
    const { username, token } = this.client.authCredentials;
    let endpoint = Endpoints.dataStorage.set(key, data);

    if (user) {
      endpoint += `&username=${username}&user_token=${token}`;
    }

    const response = (await this.request(endpoint)) as Response;

    return response;
  }

  /**
   * Updates data in the data store.
   * @param key The key of the data item you'd like to update.
   * @param value	The value you'd like to apply to the data store item.
   * @param operation The operation you'd like to perform.
   * @param [user] Whether this is a user data store item.
   */
  async update(
    key: string,
    value: string | number,
    operation: DataStoreOperations,
    user?: boolean
  ): Promise<DataStoreItemResponse> {
    const { username, token } = this.client.authCredentials;
    let endpoint = Endpoints.dataStorage.update(key, operation, value);

    if (user) {
      endpoint += `&username=${username}&user_token=${token}`;
    }

    const response = (await this.request(endpoint)) as DataStoreItemResponse;

    return response;
  }

  /**
   * Removes data from the data store.
   *
   * @param key The key of the data item you'd like to remove.
   * @param [user] Whether to remove a user data store item.
   */
  async remove(key: string, user?: boolean): Promise<Response> {
    const { username, token } = this.client.authCredentials;
    let endpoint = Endpoints.dataStorage.remove(key);

    if (user) {
      endpoint += `&username=${username}&user_token=${token}`;
    }

    const response = (await this.request(endpoint)) as Response;

    return response;
  }

  /**
   * Returns either all the keys in the game's global data store, or all the keys in a user's data store.
   *
   * @param [user] Whether to fetch user data store item.
   * @param [pattern] The pattern to apply to the key names in the data store.
   */
  async getKeys(
    user?: boolean,
    pattern?: string
  ): Promise<DataStoreKeysResponse> {
    const { username, token } = this.client.authCredentials;
    let endpoint = Endpoints.dataStorage.getKeys();

    if (user) {
      endpoint += `&username=${username}&user_token=${token}`;
    }

    if (pattern) {
      endpoint += `&pattern=${pattern}`;
    }

    const response = (await this.request(endpoint)) as DataStoreKeysResponse;

    return response;
  }
}
