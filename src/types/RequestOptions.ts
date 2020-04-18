import { Formats } from './Formats';
import { HttpMethods } from './HttpMethods';
import { BodyInit } from 'node-fetch';

/**
 * API request options.
 */
export interface RequestOptions {
  method?: HttpMethods;
  body?: BodyInit;
  format?: Formats;
}
