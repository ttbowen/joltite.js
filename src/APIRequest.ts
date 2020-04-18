import { RequestOptions } from './types/RequestOptions.js';
import { GameJolt } from './GameJolt.js';
import { HttpMethods } from './types/HttpMethods.js';
import { Formats } from './types/Formats.js';
import { BodyInit } from './types/BodyInit';

import SHA1 from './util/SHA1.js';

/**
 * Represents an API request.
 */
export class APIRequest {
  method: HttpMethods;
  path: string;
  client: GameJolt;
  body?: BodyInit;
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
  async make(): Promise<Response> {
    let url = `${this.path}&game_id=${this.client.gameId}`;

    if (this.format !== Formats.Json) {
      url += `&format=${this.format}`;
    }

    const signature = await this.signature(url);

    const fetch =
      typeof window !== 'undefined' && window.fetch
        ? window.fetch
        : (await import('node-fetch')).default;

    return (await fetch(`${url}&signature=${signature}`, {
      method: this.method,
      body: this.body as string,
    })) as Response;
  }

  private signature(url: string): Promise<string> {
    return SHA1(url + this.client.privateKey);
  }
}
