import createHttpError from 'http-errors';

import { getTrips, getTrip, createTrip } from '../services/tripsServices.js';

export async function getTripsController(req, res) {
  const students = await getTrips();

  res.json({
    status: 200,
    message: 'Trip received successfully',
    data: students,
  });
}

export async function getTripController(req, res, next) {
  const { id } = req.params;

  const trip = await getTrip(id);

  if (trip === null) {
    return next(new createHttpError.NotFound('Trip not found:('));
  }

  res.json({
    status: 200,
    message: 'Student received successfully',
    data: trip,
  });
}

export async function createTripController(req, res) {
  const trip = {
    name: req.body.name,
    date: req.body.date,
    truckTrip: req.body.truckTrip,
    startTrip: req.body.startTrip,
    endTrip: req.body.endTrip,
    lengthTrip: req.body.lengthTrip,
    weigth: req.body.weigth,
    product: req.body.product,
  };
  const result = await createTrip(trip);

  console.log(result);
  res.send("Trip was created");
}
