import { isBrowser } from './constants';

/**
 * Creates a sha-1 hash using the Web Crypto API.
 *
 * @param message The message to hash.
 */
async function subtleCrypto(message: string): Promise<string> {
  const encoder = new TextEncoder();
  const hashBuffer = await crypto.subtle.digest(
    'SHA-1',
    encoder.encode(message)
  );
  const hashData = Array.from(new Uint8Array(hashBuffer));

  return hashData.map((b) => b.toString(16).padStart(2, '0')).join('');
}

/**
 * Creates a sha-1 hash using the node crypto module.
 *
 * @param message The message to hash.
 */
function nodeCrypto(message: string): string {
  const hash = require('crypto').createHash('sha1');
  hash.update(message);

  return hash.digest('hex');
}

/**
 * Creates a sha-1 hash.
 *
 * @param message The message to hash.
 */
export async function SHA1(message: string): Promise<string> {
  return isBrowser && window.crypto.subtle
    ? subtleCrypto(message)
    : nodeCrypto(message);
}
