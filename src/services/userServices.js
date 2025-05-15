import { User } from '../db/models/user.js';

export async function getUsers() {
  const users = await User.find();

  return {
    users,
  };
}
