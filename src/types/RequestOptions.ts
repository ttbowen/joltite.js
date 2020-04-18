import { Formats } from './Formats';
import { HttpMethods } from './HttpMethods';

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
