import { Response } from '../types/responses/Response.js';
import { BaseManager } from './BaseManager.js';
import { Endpoints } from '../util/constants.js';

/**
 * Manager responsible for managing the API methods of sessions.
 * Sessions are used to tell Game Jolt when a user is playing a game,
 * and what state they are in while playing (active or idle).
 */
export class SessionManager extends BaseManager {
  private status = 'active';

  /**
   * Sets the session status.
   */
  set isActive(active: boolean) {
    this.status = active ? 'active' : 'idle';
  }

  /**
   * Opens a game session for a particular user and allows you to tell Game Jolt
   * that a user is playing your game.s
   */
  async open(): Promise<Response> {
    const { username, token } = this.client.authCredentials;
    const response = (await this.request(
      Endpoints.sessions.open(username, token)
    )) as Response;

    if (response.success) {
      const pingInterval = 30 * 1000;
      setInterval(() => this.ping(), pingInterval);
    }

    return response;
  }

  /**
   * Pings an open session to tell the system that it's still active.
   * If the session hasn't been pinged within 120 seconds,
   * the system will close the session and you will have to open another one.
   */
  async ping(): Promise<Response> {
    const { username, token } = this.client.authCredentials;
    const response = (await this.request(
      Endpoints.sessions.ping(username, token, this.status)
    )) as Response;

    return response;
  }

  /**
   * Closes the active session.
   */
  async close(): Promise<Response> {
    const { username, token } = this.client.authCredentials;
    const response = (await this.request(
      Endpoints.sessions.close(username, token)
    )) as Response;

    return response;
  }
}
