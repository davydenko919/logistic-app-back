import createHttpError from 'http-errors';

import {
  getTrips,
  getTrip,
  createTrip,
  deleteTrip,
  updateTrip,
} from '../services/tripsServices.js';

import {parsePaginationParams} from '../utils/parsePaginationParams.js';
import {parseSortParams} from '../utils/parseSortParams.js';

export async function getTripsController(req, res) {
  const {page, perPage} = parsePaginationParams(req.query);
  const { sortBy, sortOrder } = parseSortParams(req.query);

  const { startDate, endDate } = req.query;

  const trips = await getTrips({
    page,
    perPage,
    sortBy,
    sortOrder,
    startDate,
    endDate,
  });

  res.json({
    status: 200,
    message: 'here is the array trps',
    data: trips,
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
    message: 'Trip received successfully',
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
  res
    .status(201)
    .json({ status: 201, message: 'Student created!', data: result });
}

export async function deleteTripController(req, res, next) {
  const { id } = req.params;

  const result = await deleteTrip(id);

  if (result === null) {
    return next(new createHttpError.NotFound('Trip not found:('));
  }

  res.json({
    status: 200,
    message: 'Trip deleted successfully',
    data: result,
  });
}


export async function updateTripController(req, res, next) {
  const { id } = req.params;

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
  const result = await updateTrip(id, trip);

  if (result === null) {
    return next(new createHttpError.NotFound('Trip not found:('));
  }


  console.log(result);
  res
    .status(201)
    .json({ status: 201, message: 'Student updated!', data: result });
}
