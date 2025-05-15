import {
  getUsers,
} from '../services/userServices.js';

export async function getUsersController(req, res) {
  const { users } = await getUsers();

  res.json({
    status: 200,
    message: 'Here is the array of users',
    data: users,
  });
}
