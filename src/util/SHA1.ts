export default async (message: string): Promise<string> => {
  if (typeof window !== 'undefined' && window.crypto.subtle) {
    const encoder = new TextEncoder();

    const buffer = await crypto.subtle.digest('SHA-1', encoder.encode(message));

    const array = Array.from(new Uint8Array(buffer));

    const hex = array.map((b) => b.toString(16).padStart(2, '0')).join('');

    return hex;
  } else {
    const crypto = (await import('crypto')).default;

    const shasum = crypto.createHash('sha1');

    shasum.update(message);

    return shasum.digest('hex');
  }
};
