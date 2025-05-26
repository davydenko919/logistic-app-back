import Joi from "joi";

export const refuelingSchema = Joi.object({
  date: Joi.string().required(),
  truck: Joi.string().required(),
  place: Joi.string().required(),
  gasStation: Joi.string().optional(),
  amount: Joi.number().required(),
});

export const putRefuelingSchema = Joi.object({
  date: Joi.string().optional(),
  truck: Joi.string().optional(),
  place: Joi.string().optional(),
  gasStation: Joi.string().optional(),
  amount: Joi.number().optional(),
});
