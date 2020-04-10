import { BodyInit } from 'node-fetch';

import { Formats } from './Formats';
import { HttpMethods } from './HttpMethods';

/**
 * API request options.
 */
export interface RequestOptions {
  method?: HttpMethods;
  body?: BodyInit;
  format?: Formats;
}
