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

export function deleteTrip(tripId) {
  return Trip.findByIdAndDelete(tripId);
}

export function updateTrip(tripId, trip) {
  return Trip.findByIdAndUpdate(tripId, trip);
}
