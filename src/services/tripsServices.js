import { Trip } from '../db/models/tripModel.js';

export async function getTrips({
  page,
  perPage,
  sortBy,
  sortOrder,
  startDate,
  endDate,
  driverId,
}) {
  const skip = page > 0 ? (page - 1) * perPage : 0;

  const query = {};

  if (startDate || endDate) {
    query.date = {};

    if (startDate) {
      query.date.$gte = `${startDate}T00:00:00`;
    }

    if (endDate) {
      query.date.$lte = `${endDate}T23:59:59`;
    }
  }

// console.log(driverId);


  if (driverId) {
    query.driverId = driverId;
  }

  const tripQuery = Trip.find(query);

  const [total, trips] = await Promise.all([
    Trip.countDocuments(query),
    tripQuery
      .sort({ [sortBy]: sortOrder })
      .skip(skip)
      .limit(perPage),
  ]);

  const totalPages = Math.ceil(total / perPage);

  return {
    trips,
    page,
    perPage,
    totalItems: total,
    hasNextPage: totalPages - page > 0,
    hasPreviousPage: page > 1,
  };
}

export function getTrip(id) {
  return Trip.findById(id);
}

export function createTrip(trip) {
  return Trip.create(trip);
}

export function deleteTrip(tripId) {
  return Trip.findByIdAndDelete(tripId);
}

export function updateTrip(tripId, trip) {
  return Trip.findByIdAndUpdate(tripId, trip);
}
