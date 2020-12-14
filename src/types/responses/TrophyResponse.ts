import { Response } from './Response';
import { Trophy } from '../models/Trophy';

/**
 * Represents a trophy response returned from the API.
 */
export interface TrophyResponse extends Response {
  /**
   * The game trophies returned from the API.
   */
  trophies: Trophy[];
}
