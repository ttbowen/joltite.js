/**
 * @jest-environment node
 */
jest.mock('node-fetch', () => jest.fn());
jest.useFakeTimers();

import fetch from 'node-fetch';

import { GameJolt } from '../../src/GameJolt';
import { Endpoints } from '../../src/util/constants';
import { ScoreQuery } from '../../src/types/ScoreQuery';

const { Response } = jest.requireActual('node-fetch');

describe('ScoreManager', () => {
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
      Endpoints.scores.fetch = jest.fn();
      const query: ScoreQuery = {
        userOnly: true,
        betterThan: 5,
        worseThan: 10,
        tableId: 12345,
        limit: 10,
      };

      await client.scores.fetch(query);

      expect(Endpoints.scores.fetch).toHaveBeenCalledTimes(1);
    });

    it('should return the correct api response', async () => {
      const result = await client.scores.fetch();

      expect(result).toEqual({
        success: true,
      });
    });
  });

  describe('getRank', () => {
    it('should call the correct endpoint', async () => {
      Endpoints.scores.rank = jest.fn();

      await client.scores.getRank(12345);

      expect(Endpoints.scores.rank).toHaveBeenCalledTimes(1);
    });

    it('should return the correct api response', async () => {
      const result = await client.scores.getRank(12345);

      expect(result).toEqual({
        success: true,
      });
    });
  });

  describe('tables', () => {
    it('should call the correct endpoint', async () => {
      Endpoints.scores.tables = jest.fn();

      await client.scores.tables();

      expect(Endpoints.scores.tables).toHaveBeenCalledTimes(1);
    });

    it('should return the correct api response', async () => {
      const result = await client.scores.tables();

      expect(result).toEqual({
        success: true,
      });
    });
  });

  describe('add', () => {
    it('should call the correct endpoint', async () => {
      Endpoints.scores.add = jest.fn();

      await client.scores.add('12345', 12345);

      expect(Endpoints.scores.add).toHaveBeenCalledTimes(1);
    });

    it('should return the correct api response', async () => {
      const result = await client.scores.add('12345', 12345);

      expect(result).toEqual({
        success: true,
      });
    });
  });
});
