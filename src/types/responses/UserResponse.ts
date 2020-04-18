import { Response } from './Response.js';
import { User } from '../models/User.js';

/**
 * Represents a user resource returned from the API.
 */
export interface UserResponse extends Response {
  users: User[];
}
