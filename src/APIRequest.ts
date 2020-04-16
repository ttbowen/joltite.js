import * as nodeFetch from 'node-fetch';
import { SHA1 } from 'crypto-js';

import { RequestOptions } from './types/RequestOptions';
import { GameJolt } from './GameJolt';
import { HttpMethods } from './types/HttpMethods';
import { Formats } from './types/Formats';

const fetch = nodeFetch.default;

/**
 * Represents an API request.
 */
export class APIRequest {
  method: HttpMethods;
  path: string;
  client: GameJolt;
  body?: nodeFetch.BodyInit;
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
  make(): Promise<nodeFetch.Response> {
    let url = `${this.path}&game_id=${this.client.gameId}`;

    if (this.format !== Formats.Json) {
      url += `&format=${this.format}`;
    }

    return fetch(`${url}&signature=${this.signature(url)}`, {
      method: this.method,
      body: this.body,
    });
  }

  private signature(url: string): string {
    return SHA1(url + this.client.privateKey).toString();
  }
}
