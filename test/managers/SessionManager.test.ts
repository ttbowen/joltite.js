/**
 * @jest-environment node
 */
jest.mock('node-fetch', () => jest.fn());
jest.useFakeTimers();

import fetch from 'node-fetch';

import { GameJolt } from '../../src/GameJolt';

const { Response } = jest.requireActual('node-fetch');

describe('SessionManager', () => {
  const privateKey = 'cb2g1907fb6c96a95fc8950f8b6cbke6';
  const gameId = 1234;
  let client: GameJolt;

  beforeEach(() => {
    client = new GameJolt({
      privateKey,
      gameId,
    });
  });

  describe('open', () => {
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

      const result = await client.sessions.open();

      expect(result).toEqual({
        success: true,
      });
    });
  });

  describe('ping', () => {
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

      const result = await client.sessions.ping();

      expect(result).toEqual({
        success: true,
      });
    });
  });

  describe('close', () => {
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

      const result = await client.sessions.close();

      expect(result).toEqual({
        success: true,
      });
    });
  });
});
