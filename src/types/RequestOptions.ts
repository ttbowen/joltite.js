import { Formats } from './Formats.js';
import { HttpMethods } from './HttpMethods.js';
import { BodyInit } from './BodyInit';

/**
 * API request options.
 */
export interface RequestOptions {
  method?: HttpMethods;
  body?: BodyInit;
  format?: Formats;
}
