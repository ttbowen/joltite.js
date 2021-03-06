import { Response } from './Response';
import { Score } from '../models/Score';

/**
 * Represents a scores fetch response returned from the API.
 */
export interface ScoreResponse extends Response {
  /**
   * The scores returned from the API.
   */
  scores: Score[];
}
