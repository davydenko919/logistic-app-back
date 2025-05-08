import { Trip } from '../db/models/TripModel.js';

export async function getTrips({page, perPage, sortBy, sortOrder}) {
  const skip = page > 0 ? (page - 1) * perPage : 0;

  const tripQuery = Trip.find();

  const [total, trips] = await Promise.all([
    Trip.countDocuments(tripQuery),
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

export function getTrip(tripId) {
  return Trip.findById(tripId);
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
