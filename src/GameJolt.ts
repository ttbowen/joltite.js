import { ClientOptions } from './types/ClientOptions';
import { UserManager } from './managers/UserManager';
import { Response } from './types/responses/Response';
import { SessionManager } from './managers/SessionManager';
import { AuthCredentials } from './types/AuthCredentials';
import { ScoreManager } from './managers/ScoreManager';
import { TrophyManager } from './managers/TrophyManager';
import { DataStoreManager } from './managers/DataStoreManager';
import { FriendsManager } from './managers/FriendsManager';

export class GameJolt {
  /**
   * The user authentication credentials.
   */
  authCredentials: AuthCredentials;

  /**
   * The ID of your game.
   */
  readonly gameId: number;

  /**
   * Private Key of your game (found under "Manage Achievements" on the game dashboard).
   */
  readonly privateKey: string;

  /**
   * Manager for user endpoints.
   */
  readonly users: UserManager;

  /**
   * Manager for session endpoints.
   */
  readonly sessions: SessionManager;

  /**
   * Manager for score endpoints.
   */
  readonly scores: ScoreManager;

  /**
   * Manager for trophy endpoints.
   */
  readonly trophies: TrophyManager;

  /**
   * Manager for data storage endpoints.
   */
  readonly dataStorage: DataStoreManager;

  /**
   * Manager for friend endpoints.
   */
  readonly friends: FriendsManager;

  /**
   * @param options The options to pass to the client.
   */
  constructor(options: ClientOptions) {
    this.gameId = options.gameId;
    this.privateKey = options.privateKey;
    this.authCredentials = options.authCredentials || {
      username: '',
      token: '',
    };
    this.users = new UserManager(this);
    this.sessions = new SessionManager(this);
    this.scores = new ScoreManager(this);
    this.trophies = new TrophyManager(this);
    this.dataStorage = new DataStoreManager(this);
    this.friends = new FriendsManager(this);

    if (options.authCredentials) {
      this.sessions.open();
    }
  }

  /**
   * Login to Game Jolt with username and token.
   *
   * @param credentials The user credentials for authentication.
   */
  async login(credentials: AuthCredentials): Promise<Response> {
    const response = await this.users.auth(credentials);
    if (response.success) {
      this.authCredentials = credentials;
      this.sessions.open();
    }

    return response;
  }

  /**
   * Logout the current acive user.
   */
  async logout(): Promise<Response> {
    const response = await this.sessions.close();
    if (response.success) {
      this.authCredentials = {
        username: '',
        token: '',
      };
    }

    return response;
  }
}
