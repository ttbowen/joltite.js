/**
 * Represents a generic response returned from the API.
 */
export interface Response {
  /**
   * Whether the request succeeded or failed.
   */
  success: boolean;

  /**
   * If the request was not successful, this contains the error message.
   */
  message?: string;
}
