import fetch from 'node-fetch';

import { GameJolt } from '../../src/GameJolt';
import { AuthCredentials } from '../../src/types/AuthCredentials';

jest.mock('node-fetch', () => jest.fn());

const { Response } = jest.requireActual('node-fetch');

describe('UserManager', () => {
  const privateKey = 'cb2g1907fb6c96a95fc8950f8b6cbke6';
  const gameId = 1234;
  const authCredentials: AuthCredentials = {
    username: 'user',
    token: 'abc123',
  };
  let client: GameJolt;

  beforeEach(() => {
    client = new GameJolt({
      privateKey,
      gameId,
      authCredentials,
    });
  });

  describe('auth', () => {
    it('should return the correct api response', async () => {
      (fetch as jest.MockedFunction<typeof fetch>).mockResolvedValueOnce(
        new Response(
          JSON.stringify({
            response: {
              success: 'true',
            },
          })
        )
      );

      const result = await client.users.auth(authCredentials);

      expect(result).toEqual({
        success: true,
      });
    });
  });

  describe('fetch', () => {
    it('should return the correct api response', async () => {
      const userId = 15071;
      (fetch as jest.MockedFunction<typeof fetch>).mockResolvedValueOnce(
        new Response(
          JSON.stringify({
            response: {
              success: 'true',
              users: [
                {
                  id: 15071,
                },
              ],
            },
          })
        )
      );

      const result = await client.users.fetch(userId);

      expect(result).toEqual({
        success: true,
        users: [{ id: 15071 }],
      });
    });
  });
});
