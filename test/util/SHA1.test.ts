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
      'b4cca2d99afb3fc3f0442ce23a3692811ffbb4e9',
    ],
    [
      Endpoints.sessions.open(username, token),
      '4e14f27b7365192eb730229e7aed900e5f435e06',
    ],
    [
      Endpoints.users.fetch([15071]),
      'ee5588aa9d4b5553bf42f7d30ccf08f618cdbc55',
    ],
  ])(
    'should return a sha-1 hash',
    async (original: string, expected: string) => {
      const hash = await SHA1(original);

      expect(hash).toEqual(expected);
    }
  );
});
