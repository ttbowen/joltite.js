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
      '17c4058c6dd1f11d3b8b904c14cc66c766173b67',
    ],
    [
      Endpoints.sessions.open(username, token),
      'f0274888d36a33e6b20958dab6b0e2a233cc483b',
    ],
    [
      Endpoints.users.fetch([15071]),
      'cfba6dd817ca442e4436a8afaa1ba012b869f021',
    ],
  ])(
    'should return a sha-1 hash',
    async (original: string, expected: string) => {
      const hash = await SHA1(original);

      expect(hash).toEqual(expected);
    }
  );
});
