/**
 * @jest-environment node
 */
import { Endpoints } from '../../src/util/constants';
import { SHA1 } from '../../src/util/SHA1';

const username = 'ttbowen';
const token = 'abc123';

describe('SHA1', () => {
  it.each([
    [
      Endpoints.sessions.ping(username, token, 'active'),
      '9c5720b1d24ebf50e33dc0374c21354af1c8957c',
    ],
    [
      Endpoints.sessions.open(username, token),
      'af94a51f5fd29f985ada75697fc56ccdce94eb2a',
    ],
    [
      Endpoints.users.fetch([15071]),
      'b1d812028deeee8d26efe59c4bb1a9ab6858ebd0',
    ],
  ])(
    'should return a sha-1 hash',
    async (original: string, expected: string) => {
      const hash = await SHA1(original);

      expect(hash).toEqual(expected);
    }
  );
});
