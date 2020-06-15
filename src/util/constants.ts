const apiBase = 'https://api.gamejolt.com/api/game/v1_2';

/**
 * Contains all user endpoints.
 */
const users = {
  auth: (username: string, token: string): string =>
    `${apiBase}/users/auth?username=${username}&user_token=${token}`,
  fetch: (userIds: number[]): string =>
    `${apiBase}/users?user_id=${userIds.join()}`,
};

/**
 * Contains all session endpoints
 */
const sessions = {
  open: (username: string, token: string): string =>
    `${apiBase}/sessions/open?username=${username}&user_token=${token}`,
  ping: (username: string, token: string, status: string): string =>
    `${apiBase}/sessions/ping?username=${username}&user_token=${token}&status=${status}`,
  close: (username: string, token: string): string =>
    `${apiBase}/sessions/close?username=${username}&user_token=${token}`,
};

/**
 * Contains all score endpoints
 */
const scores = {
  add: (score: string, sort: number): string =>
    `${apiBase}/scores/add?score=${score}&sort=${sort}`,
  fetch: (): string => `${apiBase}/scores?`,
  tables: (): string => `${apiBase}/scores/tables?`,
  rank: (sort: number): string => `${apiBase}/scores/get-rank?sort=${sort}`,
};

/**
 * Contains all api endpoints.
 */
export const Endpoints = {
  users,
  sessions,
  scores,
};

export const isBrowser = typeof window !== 'undefined';
