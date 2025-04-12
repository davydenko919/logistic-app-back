import { TripModel } from '../db/models/TripModel.js';

export function getTrips() {
  return TripModel.find();
}

export function getTrip(studentId) {
  return TripModel.findById(studentId);
}
