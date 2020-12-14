import { TrophyDifficulties } from "../TrophyDifficulties";

/**
 * Represents a Game Jolt trophy.
 */
export interface Trophy {
  /**
   * The ID of the trophy.
   */
  id: string;

  /**
   * The title of the trophy on the site.
   */
  title: string;

  /**
   * The trophy description text.
   */
  description: string;

  /**
   * Bronze, Silver, Gold, or Platinum.
   */
  difficulty: TrophyDifficulties;

  /**
   * The URL of the trophy's thumbnail image. 
   */
  image_url: string;

  /**
   * Date/time when the trophy was achieved by the user, or false if they haven't achieved it yet. 
   */
  achieved: string;
}
