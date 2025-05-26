import createHttpError from 'http-errors';
import {
  getRefuelings,
  getRefueling,
  createRefueling,
  deleteRefueling,
  updateRefueling,
} from '../services/refuelingsServices.js';
import { parsePaginationParams } from '../utils/parsePaginationParams.js';
import { parseSortParams } from '../utils/parseSortParams.js';

export async function getRefuelingsController(req, res) {
  const { page, perPage } = parsePaginationParams(req.query);
  const { sortBy, sortOrder } = parseSortParams(req.query);
  const { startDate, endDate, truck } = req.query;

  const refuelings = await getRefuelingsController({
    page,
    perPage,
    sortBy,
    sortOrder,
    startDate,
    endDate,
    driverId: req.user.id,
    truck,
  });

  res.json({
    status: 200,
    message: 'Here is the array of refuelings',
    data: refuelings,
  });
}

export async function getRefuelingController(req, res, next) {
  const { id } = req.params;
  const refueling = await getRefueling(id);

  if (!refueling || refueling.driverId.toString() !== req.user.id.toString()) {
    return next(new createHttpError.NotFound('Refueling not found :('));
  }

  res.json({
    status: 200,
    message: 'Refueling received successfully',
    data: refueling,
  });
}

export async function createRefuelingController(req, res, next) {
  if (!req.user?.id) {
    return next(new createHttpError.BadRequest('Invalid user'));
  }

  const refueling = {
    date: req.body.date,
    truck: req.body.truck,
    place: req.body.place,
    gasStation: req.body.gasStation,
    amount: req.body.amount,
    driverId: req.user.id,
  };

  const result = await createRefueling(refueling);

  res.status(201).json({
    status: 201,
    message: 'Refueling created!',
    data: result,
  });
}

export async function deleteRefuelingController(req, res, next) {
  const { id } = req.params;
  const refueling = await getRefueling(id);

  if (!refueling || refueling.driverId.toString() !== req.user.id.toString()) {
    return next(new createHttpError.NotFound('Refueling not found :('));
  }

  const result = await deleteRefueling(id);

  res.json({
    status: 200,
    message: 'Refueling deleted successfully',
    data: result,
  });
}

export async function updateRefuelingController(req, res, next) {
  const { id } = req.params;
  const existing = await getRefueling(id);

  if (!existing || existing.driverId.toString() !== req.user.id.toString()) {
    return next(new createHttpError.NotFound('Refueling not found :('));
  }

  const refueling = {
    date: req.body.date,
    truck: req.body.truck,
    place: req.body.place,
    gasStation: req.body.gasStation,
    amount: req.body.amount,
  };

  const result = await updateRefueling(id, refueling);

  res.status(201).json({
    status: 201,
    message: 'Refueling updated successfully',
    data: result,
  });
}
