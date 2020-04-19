import { Response } from 'node-fetch';

import { RequestOptions } from './types/RequestOptions';
import { GameJolt } from './GameJolt';
import { HttpMethods } from './types/HttpMethods';
import { Formats } from './types/Formats';
import { SHA1 } from './util/SHA1';
import { isBrowser } from './util/constants';

const fetch = isBrowser ? window.fetch : require('node-fetch');

/**
 * Represents an API request.
 */
export class APIRequest {
  method: HttpMethods;
  path: string;
  client: GameJolt;
  body?: any;
  format: Formats;

  /**
   * @param client The Game Jolt client.
   * @param path The path of the API request.
   * @param request The request options.
   */
  constructor(client: GameJolt, path: string, request: RequestOptions = {}) {
    this.client = client;
    this.method = request.method || HttpMethods.GET;
    this.path = path;
    this.body = request.body;
    this.format = request.format || Formats.Json;
  }

  /**
   * Sends a request to the API.
   */
  async make(): Promise<Response | globalThis.Response> {
    let url = `${this.path}&game_id=${this.client.gameId}`;

    if (this.format !== Formats.Json) {
      url += `&format=${this.format}`;
    }

    const signature = await this.signature(url);

    return fetch(`${url}&signature=${signature}`, {
      method: this.method,
      body: this.body,
    });
  }

  private signature(url: string): Promise<string> {
    return SHA1(url + this.client.privateKey);
  }
}
