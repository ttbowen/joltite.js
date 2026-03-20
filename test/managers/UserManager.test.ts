/**
 * @jest-environment node
 */
jest.mock('node-fetch', () => jest.fn());
jest.useFakeTimers();

import fetch from 'node-fetch';

import { GameJolt } from '../../src/GameJolt';
import { AuthCredentials } from '../../src/types/AuthCredentials';

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

    it('should return the correct api response when fetching by user ids', async () => {
      const userIds = [15071, 20000];
      (fetch as jest.MockedFunction<typeof fetch>).mockResolvedValueOnce(
        new Response(
          JSON.stringify({
            response: {
              success: 'true',
              users: [
                {
                  id: 15071,
                },
                {
                  id: 20000,
                },
              ],
            },
          })
        )
      );

      const result = await client.users.fetch(userIds);

      expect(result).toEqual({
        success: true,
        users: [{ id: 15071 }, { id: 20000 }],
      });
    });

    it('should return the correct api response when fetching by username', async () => {
      const username = 'testuser';
      (fetch as jest.MockedFunction<typeof fetch>).mockResolvedValueOnce(
        new Response(
          JSON.stringify({
            response: {
              success: 'true',
              users: [
                {
                  id: 15071,
                  username: 'testuser',
                },
              ],
            },
          })
        )
      );

      const result = await client.users.fetch(username);

      expect(result).toEqual({
        success: true,
        users: [{ id: 15071, username: 'testuser' }],
      });
    });
  });
});
