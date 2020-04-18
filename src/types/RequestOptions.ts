import { Formats } from './Formats';
import { HttpMethods } from './HttpMethods';
import { BodyInit } from './BodyInit';

/**
 * API request options.
 */
export interface RequestOptions {
  method?: HttpMethods;
  body?: BodyInit;
  format?: Formats;
}
