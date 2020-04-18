import fetch from 'node-fetch';
import SHA1 from '../src/util/SHA1';

import { GameJolt } from '../src/GameJolt';
import { APIRequest } from '../src/APIRequest';
import { Endpoints } from '../src/util/constants';
import { Formats } from '../src/types/Formats';

jest.mock('node-fetch', () => jest.fn());

const { Response } = jest.requireActual('node-fetch');

describe('APIRequest', () => {
  const privateKey = 'cb2g1907fb6c96a95fc8950f8b6cbke6';
  const gameId = 1234;
  let client: GameJolt;

  beforeEach(() => {
    client = new GameJolt({
      privateKey,
      gameId,
    });
  });

  describe('make', () => {
    it('should send a request', async () => {
      (fetch as jest.MockedFunction<typeof fetch>).mockResolvedValueOnce(
        new Response(
          JSON.stringify({
            response: {
              success: 'true',
            },
          })
        )
      );
      const userId = 15071;
      const endpoint = Endpoints.users.fetch([userId]);
      const apiRequest = new APIRequest(client, endpoint);

      apiRequest.make();

      expect(fetch).toHaveBeenCalled();
    });

    it('should send the correct request', async () => {
      (fetch as jest.MockedFunction<typeof fetch>).mockResolvedValueOnce(
        new Response(
          JSON.stringify({
            response: {
              success: 'true',
            },
          })
        )
      );
      const userId = 15071;
      const endpoint = Endpoints.users.fetch([userId]);
      const apiRequest = new APIRequest(client, endpoint);
      const url = `${endpoint}&game_id=${client.gameId}`;
      const signature = await SHA1(url + client.privateKey);

      apiRequest.make();

      expect(fetch).toHaveBeenCalledWith(`${url}&signature=${signature}`, {
        method: apiRequest.method,
        body: apiRequest.body,
      });
    });

    it('should send the format when not set as JSON', async () => {
      (fetch as jest.MockedFunction<typeof fetch>).mockResolvedValueOnce(
        new Response(
          JSON.stringify({
            response: {
              success: 'true',
            },
          })
        )
      );
      const userId = 15071;
      const endpoint = Endpoints.users.fetch([userId]);
      const apiRequest = new APIRequest(client, endpoint, {
        format: Formats.Dump,
      });
      const url = `${endpoint}&game_id=${client.gameId}&format=dump`;
      const signature = await SHA1(url + client.privateKey);

      apiRequest.make();

      expect(fetch).toHaveBeenCalledWith(`${url}&signature=${signature}`, {
        method: apiRequest.method,
        body: apiRequest.body,
      });
    });
  });
});
