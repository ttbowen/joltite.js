/**
 * @jest-environment node
 */
jest.mock('node-fetch', () => jest.fn());
jest.useFakeTimers();

import fetch from 'node-fetch';

import { GameJolt } from '../../src/GameJolt';
import { Endpoints } from '../../src/util/constants';
import { DataStoreOperations } from '../../src/types/DataStoreOperations';

const { Response } = jest.requireActual('node-fetch');

describe('DataStoreManager', () => {
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
      Endpoints.dataStorage.fetch = jest.fn();

      await client.dataStorage.fetch('key');

      expect(Endpoints.dataStorage.fetch).toHaveBeenCalledTimes(1);
    });

    it('should return the correct api response', async () => {
      const result = await client.dataStorage.fetch('key');

      expect(result).toEqual({
        success: true,
      });
    });
  });

  describe('set', () => {
    it('should call the correct endpoint', async () => {
      Endpoints.dataStorage.set = jest.fn();

      await client.dataStorage.set('key', 12345);

      expect(Endpoints.dataStorage.set).toHaveBeenCalledTimes(1);
    });

    it('should return the correct api response', async () => {
      const result = await client.dataStorage.set('key', 12345);

      expect(result).toEqual({
        success: true,
      });
    });
  });

  describe('update', () => {
    it('should call the correct endpoint', async () => {
      Endpoints.dataStorage.update = jest.fn();

      await client.dataStorage.update('key', 12345, DataStoreOperations.Add);

      expect(Endpoints.dataStorage.update).toHaveBeenCalledTimes(1);
    });

    it('should return the correct api response', async () => {
      const result = await client.dataStorage.update(
        'key',
        12345,
        DataStoreOperations.Add
      );

      expect(result).toEqual({
        success: true,
      });
    });
  });

  describe('remove', () => {
    it('should call the correct endpoint', async () => {
      Endpoints.dataStorage.remove = jest.fn();

      await client.dataStorage.remove('12345');

      expect(Endpoints.dataStorage.remove).toHaveBeenCalledTimes(1);
    });

    it('should return the correct api response', async () => {
      const result = await client.dataStorage.remove('12345');

      expect(result).toEqual({
        success: true,
      });
    });
  });

  describe('getKeys', () => {
    it('should call the correct endpoint', async () => {
      Endpoints.dataStorage.getKeys = jest.fn();

      await client.dataStorage.getKeys();

      expect(Endpoints.dataStorage.getKeys).toHaveBeenCalledTimes(1);
    });

    it('should return the correct api response', async () => {
      const result = await client.dataStorage.getKeys();

      expect(result).toEqual({
        success: true,
      });
    });
  });
});
