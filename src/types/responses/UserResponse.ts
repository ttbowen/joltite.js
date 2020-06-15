import { Response } from './Response';
import { User } from '../models/User';

/**
 * Represents a user fetch response returned from the API.
 */
export interface UserResponse extends Response {
  users: User[];
}
