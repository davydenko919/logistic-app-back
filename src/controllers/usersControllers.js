import {
  getUsers,
  getUser,
  updateUser
} from '../services/userServices.js';
import createHttpError from 'http-errors';

export async function getUsersController(req, res) {
  const { users } = await getUsers();

  res.json({
    status: 200,
    message: 'Here is the array of users',
    data: users,
  });
}

export async function getUserController(req, res, next) {
const { id } = req.params;
  console.log(id);


  const user = await getUser(id);
  console.log(user);

  if (user === null) {
    return next(new createHttpError.NotFound('User not found:('));
  }

  console.log(user._id.toString() !== req.user.id.toString());

  if (user._id.toString() !== req.user.id.toString()) {
    return next(new createHttpError.NotFound('User not found:('));
  }

  res.json({
    status: 200,
    message: 'User received successfully',
    data: user,
  });
}


export async function updateUserController(req, res, next) {
  const { id } = req.params;

  // Отримати існуючого користувача
  const existingUser = await getUser(id);

  // Перевірка прав доступу: чи запитувач має право редагувати цього користувача
  if (!existingUser || existingUser._id.toString() !== req.user.id.toString()) {
    return next(createHttpError(404, 'User not found or access denied'));
  }

  const updatedFields = {
    name: req.body.name,
    email: req.body.email,
    car: req.body.car,
  };

  const result = await updateUser(id, updatedFields);

  res.status(200).json({
    status: 200,
    message: 'User updated successfully',
    data: result,
  });
}
