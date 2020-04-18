export default async (message: string): Promise<string> => {
  if (typeof module !== 'undefined' && module.exports) {
    const shasum = require('crypto').createHash('sha1');

    shasum.update(message);

    return shasum.digest('hex');
  } else {
    const encoder = new TextEncoder();

    const buffer = await crypto.subtle.digest('SHA-1', encoder.encode(message));

    const array = Array.from(new Uint8Array(buffer));

    const hex = array.map((b) => b.toString(16).padStart(2, '0')).join('');

    return hex;
  }
};
