import { APIRequest } from '../APIRequest';
import { GameJolt } from '../GameJolt';
import { RequestOptions } from '../types/RequestOptions';
import { Formats } from '../types/Formats';
import { apiBase } from '../util/constants';

/**
 * Base manager responsible for managing
 * the API methods of a data model.
 */
export abstract class BaseManager {
  protected client: GameJolt;

  /**
   * @param client The Game Jolt client.
   */
  constructor(client: GameJolt) {
    this.client = client;
  }

  /**
   * Sends a request to the API.
   * @param url The url of the api request.
   * @param request The request options.
   */
  protected async request(
    url: string,
    request: RequestOptions = {}
  ): Promise<any> {
    const endpoint = apiBase + encodeURI(url);
    const apiRequest = new APIRequest(this.client, endpoint, request);
    const apiResponse = await apiRequest.make();

    let response: Promise<any>;
    if (apiRequest.format === Formats.Json) {
      const json = (await apiResponse.json()).response;
      json.success = json.success === 'true';

      response = json;
    } else {
      response = apiResponse.text();
    }

    return response;
  }
}
