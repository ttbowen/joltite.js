/**
 * @jest-environment node
 */
jest.mock('node-fetch', () => jest.fn());
jest.useFakeTimers();

import fetch from 'node-fetch';

import { GameJolt } from '../src/GameJolt';
import { AuthCredentials } from '../dist/types/AuthCredentials';

const { Response } = jest.requireActual('node-fetch');

describe('GameJolt', () => {
  const privateKey = 'cb2g1907fb6c96a95fc8950f8b6cbke6';
  const gameId = 1234;
  const authCredentials: AuthCredentials = {
    username: 'test',
    token: '1234',
  };

  describe('login', () => {
    it('should send back the auth api result', async () => {
      const client = new GameJolt({
        privateKey,
        gameId,
      });
      (fetch as jest.MockedFunction<typeof fetch>)
        .mockResolvedValueOnce(
          new Response(
            JSON.stringify({
              response: {
                success: 'true',
              },
            })
          )
        )
        .mockResolvedValueOnce(
          new Response(
            JSON.stringify({
              response: {
                success: 'false',
              },
            })
          )
        );

      const result = await client.login(authCredentials);

      expect(result).toEqual({ success: true });
    });

    it('should authenticate the user with the passed credentials', async () => {
      const client = new GameJolt({
        privateKey,
        gameId,
      });
      (fetch as jest.MockedFunction<typeof fetch>)
        .mockResolvedValueOnce(
          new Response(
            JSON.stringify({
              response: {
                success: 'true',
              },
            })
          )
        )
        .mockResolvedValueOnce(
          new Response(
            JSON.stringify({
              response: {
                success: 'false',
              },
            })
          )
        );
      const authSpy = jest.spyOn(client.users, 'auth');

      await client.login(authCredentials);

      expect(authSpy).toHaveBeenCalledWith(authCredentials);
    });

    it('should open a session when auth is successful', async () => {
      const client = new GameJolt({
        privateKey,
        gameId,
      });
      (fetch as jest.MockedFunction<typeof fetch>)
        .mockResolvedValueOnce(
          new Response(
            JSON.stringify({
              response: {
                success: 'true',
              },
            })
          )
        )
        .mockResolvedValueOnce(
          new Response(
            JSON.stringify({
              response: {
                success: 'false',
              },
            })
          )
        );
      const openSpy = jest.spyOn(client.sessions, 'open');

      await client.login(authCredentials);

      expect(openSpy).toHaveBeenCalled();
    });
  });

  describe('logout', () => {
    it('should close the session', async () => {
      const client = new GameJolt({
        privateKey,
        gameId,
      });
      const closeSpy = jest.spyOn(client.sessions, 'close');
      (fetch as jest.MockedFunction<typeof fetch>).mockResolvedValueOnce(
        new Response(
          JSON.stringify({
            response: {
              success: 'true',
            },
          })
        )
      );

      await client.logout();

      expect(closeSpy).toHaveBeenCalled();
    });
  });
});
