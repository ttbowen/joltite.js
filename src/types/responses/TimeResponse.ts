import { Response } from './Response';

/**
 * Represents a time fetch response returned from the API.
 */
export interface TimeResponse extends Response {
  /**
   * The UNIX time stamp (in seconds) representing the server's time.
   */
  timestamp: number;

  /**
   * The timezone of the server.
   */
  timezone: string;

  /**
   * The current year.
   */
  year: string;

  /**
   * The current month.
   */
  month: string;

  /**
   * The day of the month.
   */
  day: string;

  /**
   * The hour of the day.
   */
  hour: string;

  /**
   * The minute of the hour.
   */
  minute: string;

  /**
   * The seconds of the minute.
   */
  second: string;
}
