import { BaseManager } from './BaseManager';
import { Endpoints } from '../util/constants';
import { TimeResponse } from '../types/responses/TimeResponse';

/**
 * Manager responsible for managing the API methods of time.
 */
export class TimeManager extends BaseManager {
  /**
   * Returns the time of the Game Jolt server.
   */
  async fetch(): Promise<TimeResponse> {
    const response = (await this.request(
      Endpoints.time.fetch()
    )) as TimeResponse;

    return response;
  }
}
