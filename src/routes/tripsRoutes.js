import express from 'express';

import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import {isValidID} from "../middlewares/isValidID.js";
import {validateBody} from "../middlewares/validateBody.js";
import {tripSchema} from "../validation/trip.js";

import {
    getTripsController,
    getTripController,
    createTripController,
    deleteTripController,
    updateTripController,
} from '../controllers/tripsControllers.js';

const router = express.Router();
const jsonParser =express.json();

router.get('/', ctrlWrapper(getTripsController));

router.get('/:id', isValidID, ctrlWrapper(getTripController));

router.post('/', jsonParser, validateBody(tripSchema), ctrlWrapper(createTripController));

router.delete('/:id', isValidID, ctrlWrapper(deleteTripController));

router.put('/:id', isValidID, jsonParser, ctrlWrapper(updateTripController));

export default router;
