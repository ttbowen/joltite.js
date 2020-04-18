import { AuthCredentials } from './AuthCredentials.js';
/**
 * Represents options that can be passed to the Game Jolt client.
 */
export type ClientOptions = {
  /**
   * The ID of your game.
   */
  gameId: number;

  /**
   * Private Key of your game.
   * This is found under "Manage Achievements" on the game dashboard.
   */
  privateKey: string;

  /**
   * User authentication credentials.
   */
  authCredentials?: AuthCredentials;
};
