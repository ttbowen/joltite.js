import { Response } from './Response';

/**
 * Represents a data store response returned from the API.
 */
export interface DataStoreItemResponse extends Response {
  /**
   * If the request was successful, this contains the item's data.
   */
  data: string;
}
