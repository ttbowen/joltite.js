import { Response } from './Response';

/**
 * Represents a get-keys response returned from the API.
 */
export interface DataStoreKeysResponse extends Response {
  /**
   * The name of the key. This function will return all the keys for this particular data store.
   */
  keys: { key: string }[] | string;
}
