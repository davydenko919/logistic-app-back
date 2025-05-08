import Joi from "joi";

export const tripSchema = Joi.object({
    date: Joi.string(),
    truckTrip: Joi.string(),
    startTrip: Joi.number(),
    endTrip: Joi.number(),
    lengthTrip: Joi.number(),
    weigth: Joi.number(),
    product: Joi.string(),
});
