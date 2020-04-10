/**
 * The API can return information in different formats.
 * If you don't use the format parameter for a request URL, json will be used as the default format.
 */
export enum Formats {
  /**
   * Outputs data as a JSON string.
   */
  Json = 'json',

  /**
   * This is a special format used when a certain function has to output a single chunk of data.
   */
  Dump = 'dump',
}
