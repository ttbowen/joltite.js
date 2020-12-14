import { Response } from './Response';
import { Table } from '../models/Table';

/**
 * Represents a score table fetch response returned from the API.
 */
export interface TableResponse extends Response {
  /**
   * The score tables returned from the API.
   */
  tables: Table[];
}
