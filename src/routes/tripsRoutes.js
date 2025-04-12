import express from 'express';

import { ctrlWrapper } from '../utils/ctrlWrapper.js';

import {
    getTripsController,
    getTripController,
} from '../controllers/students.js';

const router = express.Router();

router.get('/', ctrlWrapper(getTripsController));

router.get('/:id', ctrlWrapper(getTripController));

export default router;
