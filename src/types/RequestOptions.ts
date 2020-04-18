import { Formats } from './Formats.js';
import { HttpMethods } from './HttpMethods.js';

/**
 * API request options.
 */
export interface RequestOptions {
  method?: HttpMethods;
  body?:
    | string
    | ArrayBuffer
    | ArrayBufferView
    | NodeJS.ReadableStream
    | URLSearchParams
    | FormData;
  format?: Formats;
}
