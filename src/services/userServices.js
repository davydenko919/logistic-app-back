import { User } from '../db/models/user.js';

export async function getUsers() {
  const users = await User.find();

  return {
    users,
  };
}

export function getUser(id) {
  return User.findById(id);
}

export function updateUser(userId, user) {
  return User.findByIdAndUpdate(userId, user);
}
