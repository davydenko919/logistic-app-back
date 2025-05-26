import Joi from 'joi';

export const userPutSchema = Joi.object({
  name: Joi.string(),
  email: Joi.string().email(),
  car: Joi.string(),
});
