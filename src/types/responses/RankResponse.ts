import { Response } from './Response';

/**
 * Represents a get-rank response returned from the API.
 */
export interface RankResponse extends Response {
  /**
   * The rank of the score on the score table. 
   */
  rank: number;
}
