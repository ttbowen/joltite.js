/**
 * @jest-environment node
 */
jest.mock('node-fetch', () => jest.fn());
jest.useFakeTimers();

import fetch from 'node-fetch';

import { GameJolt } from '../../src/GameJolt';
import { Endpoints } from '../../src/util/constants';

const { Response } = jest.requireActual('node-fetch');

describe('TimeManager', () => {
  const privateKey = 'cb2g1907fb6c96a95fc8950f8b6cbke6';
  const gameId = 1234;

  let client: GameJolt;

  beforeEach(() => {
    client = new GameJolt({
      privateKey,
      gameId,
    });

    (fetch as jest.MockedFunction<typeof fetch>).mockResolvedValueOnce(
      new Response(
        JSON.stringify({
          response: {
            success: 'true',
          },
        })
      )
    );
  });

  describe('fetch', () => {
    it('should call the correct endpoint', async () => {
      Endpoints.time.fetch = jest.fn();

      await client.time.fetch();

      expect(Endpoints.time.fetch).toHaveBeenCalledTimes(1);
    });

    it('should return the correct api response', async () => {
      const result = await client.time.fetch();

      expect(result).toEqual({
        success: true,
      });
    });
  });
});
