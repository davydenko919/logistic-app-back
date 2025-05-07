import { Trip } from '../db/models/TripModel.js';

export function getTrips() {
  return Trip.find();
}

export function getTrip(tripId) {
  return Trip.findById(tripId);
}

export function createTrip(trip) {
  return Trip.create(trip);
}

