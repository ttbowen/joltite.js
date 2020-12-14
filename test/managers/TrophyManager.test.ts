/**
 * @jest-environment node
 */
jest.mock('node-fetch', () => jest.fn());
jest.useFakeTimers();

import fetch from 'node-fetch';

import { GameJolt } from '../../src/GameJolt';
import { Endpoints } from '../../src/util/constants';

const { Response } = jest.requireActual('node-fetch');

describe('TrophyManager', () => {
  const privateKey = 'cb2g1907fb6c96a95fc8950f8b6cbke6';
  const gameId = 1234;
  const trophies = [
    {
      id: '133756',
      title: 'test',
      difficulty: 'Bronze',
      description: 'test',
      achieved: 'false',
    },
  ];
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
            trophies,
          },
        })
      )
    );
  });

  describe('fetch', () => {
    it('should call the correct endpoint', async () => {
      Endpoints.trophies.fetch = jest.fn();

      await client.trophies.fetch();

      expect(Endpoints.trophies.fetch).toHaveBeenCalledTimes(1);
    });

    it('should return the correct api response', async () => {
      const result = await client.trophies.fetch();

      expect(result).toEqual({
        success: true,
        trophies,
      });
    });

    it('should populate the fetchedTrophies property', async () => {
      await client.trophies.fetch();

      expect(client.trophies.fetchedTrophies).toEqual(trophies);
    });
  });

  describe('fetchById', () => {
    it('should call the correct endpoint', async () => {
      Endpoints.trophies.fetch = jest.fn();

      await client.trophies.fetchById(12345);

      expect(Endpoints.trophies.fetch).toHaveBeenCalledTimes(1);
    });

    it('should return the correct api response', async () => {
      const result = await client.trophies.fetchById(133756);

      expect(result).toEqual({
        success: true,
        trophies,
      });
    });
  });

  describe('addAchieved', () => {
    it('should call the correct endpoint', async () => {
      Endpoints.trophies.add = jest.fn();

      await client.trophies.addAchieved(12345);

      expect(Endpoints.trophies.add).toHaveBeenCalledTimes(1);
    });

    it('should return the correct api response', async () => {
      const result = await client.trophies.addAchieved(133756);

      expect(result).toEqual({
        success: true,
        trophies,
      });
    });
  });

  describe('removeAchieved', () => {
    it('should call the correct endpoint', async () => {
      Endpoints.trophies.remove = jest.fn();

      await client.trophies.removeAchieved(12345);

      expect(Endpoints.trophies.remove).toHaveBeenCalledTimes(1);
    });

    it('should return the correct api response', async () => {
      const result = await client.trophies.removeAchieved(133756);

      expect(result).toEqual({
        success: true,
        trophies,
      });
    });
  });
});
