import createHttpError from 'http-errors';

import { getTrips, getTrip } from '../services/tripsServices.js';

export async function getTripsController(req, res) {
  const students = await getTrips();

  res.json({
    status: 200,
    message: 'Students received successfully',
    data: students,
  });
}

export async function getTripController(req, res, next) {
  const { id } = req.params;

  const trip = await getTrip(id);

  if (trip === null) {
    // throw createHttpError(404, "Trip not found");
    // throw createHttpError[404]("Trip not found");
    return next(new createHttpError.NotFound('Trip not found:('));
  }

  res.json({
    status: 200,
    message: 'Student received successfully',
    data: trip,
  });
}
