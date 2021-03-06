import { Response } from '../types/responses/Response';
import { BaseManager } from './BaseManager';
import { Endpoints } from '../util/constants';
import { ScoreOptions } from '../types/ScoreOptions';
import { ScoreResponse } from '../types/responses/ScoreResponse';
import { ScoreQuery } from '../types/ScoreQuery';
import { TableResponse } from '../types/responses/TableResponse';
import { RankResponse } from '../types/responses/RankResponse';

/**
 * Manager responsible for managing the API methods of scores.
 */
export class ScoreManager extends BaseManager {
  /**
   * Adds a score for a user or guest.
   * @param score This is a string value associated with the score.
   * @param sort This is a numerical sorting value associated with the score. All sorting will be based on this number.
   * @param options Extra score options.
   */
  async add(
    score: string,
    sort: number,
    options: ScoreOptions = {}
  ): Promise<Response> {
    let endpoint = Endpoints.scores.add(score, sort);

    endpoint += this.guestOrUser(options.guest);

    if (options.extraData) {
      endpoint += `&extra_data=${options.extraData}`;
    }

    if (options.tableId) {
      endpoint += `&table_id=${options.tableId}`;
    }

    return (await this.request(endpoint)) as Response;
  }

  /**
   * Returns a list of scores either for a user or globally for a game.
   *
   * @param query The query options for fetching scores.
   */
  async fetch(query: ScoreQuery = {}): Promise<ScoreResponse> {
    const { username, token } = this.client.authCredentials;
    let endpoint = Endpoints.scores.fetch();

    if (query.userOnly) {
      endpoint += `&username=${username}&user_token=${token}`;
    } else if (query.guest) {
      endpoint += `&guest=${query.guest}`;
    }

    if (query.betterThan) {
      endpoint += `&better_than=${query.betterThan}`;
    } else if (query.worseThan) {
      endpoint += `&worse_than=${query.worseThan}`;
    }

    if (query.tableId) {
      endpoint += `&table_id=${query.tableId}`;
    }

    if (query.limit) {
      endpoint += `&limit=${query.limit}`;
    }

    return (await this.request(endpoint)) as ScoreResponse;
  }

  /**
   * Returns the rank of a particular score on a score table.
   *
   * @param sort This is a numerical sorting value that is represented by a rank on the score table.
   * @param tableId The ID of the score table from which you want to get the rank.
   */
  async getRank(sort: number, tableId?: number): Promise<RankResponse> {
    let endpoint = Endpoints.scores.rank(sort);

    if (tableId) {
      endpoint += `&table_id=${tableId}`;
    }

    const response = (await this.request(endpoint)) as RankResponse;

    return response;
  }

  /**
   * Returns a list of high score tables for a game.
   */
  async tables(): Promise<TableResponse> {
    const response = (await this.request(
      Endpoints.scores.tables()
    )) as TableResponse;

    return response;
  }

  private guestOrUser(guest?: string): string {
    const { username, token } = this.client.authCredentials;

    return guest
      ? `&guest=${guest}`
      : `&username=${username}&user_token=${token}`;
  }
}
