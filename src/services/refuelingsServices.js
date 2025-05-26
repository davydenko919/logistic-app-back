import { Refueling } from '../db/models/refueling.js';

export async function getRefuelings({
  page,
  perPage,
  sortBy,
  sortOrder,
  startDate,
  endDate,
  driverId,
  truck,
}) {
  if (!driverId) return { refuelings: [], page, perPage, totalItems: 0, hasNextPage: false, hasPreviousPage: false };

  const skip = page > 0 ? (page - 1) * perPage : 0;
  const query = {};

  if (startDate || endDate) {
    query.date = {};
    if (startDate) query.date.$gte = `${startDate}T00:00:00`;
    if (endDate) query.date.$lte = `${endDate}T23:59:59`;
  }

  if (driverId) query.driverId = driverId;
  if (truck) query.truck = { $regex: truck, $options: 'i' };

  const refuelingQuery = Refueling.find(query);
  const [total, refuelings] = await Promise.all([
    Refueling.countDocuments(query),
    refuelingQuery.sort({ [sortBy]: sortOrder }).skip(skip).limit(perPage),
  ]);

  const totalPages = Math.ceil(total / perPage);

  return {
    refuelings,
    page,
    perPage,
    totalItems: total,
    hasNextPage: totalPages - page > 0,
    hasPreviousPage: page > 1,
  };
}

export function getRefueling(id) {
  return Refueling.findById(id);
}

export function createRefueling(refueling) {
  return Refueling.create(refueling);
}

export function deleteRefueling(refuelingId) {
  return Refueling.findByIdAndDelete(refuelingId);
}

export function updateRefueling(refuelingId, refueling) {
  return Refueling.findByIdAndUpdate(refuelingId, refueling);
}
