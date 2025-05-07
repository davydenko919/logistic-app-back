import express from 'express';

import { ctrlWrapper } from '../utils/ctrlWrapper.js';

import {
    getTripsController,
    getTripController,
    createTripController,
} from '../controllers/tripsControllers.js';

const router = express.Router();
const jsonParser =express.json();

router.get('/', ctrlWrapper(getTripsController));

router.get('/:id', ctrlWrapper(getTripController));

router.post('/', jsonParser, ctrlWrapper(createTripController));

export default router;
