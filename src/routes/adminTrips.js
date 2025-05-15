import express from 'express';

import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import {isValidID} from "../middlewares/isValidID.js";


import {
    getAdminTripsController,
    getAdminTripController,
    deleteAdminTripController,
    updateAdminTripController,
} from '../controllers/AdminTripsControllers.js';

const router = express.Router();
const jsonParser =express.json();

router.get('/', ctrlWrapper(getAdminTripsController));

router.get('/:id', isValidID, ctrlWrapper(getAdminTripController));

router.delete('/:id', isValidID, ctrlWrapper(deleteAdminTripController));

router.put('/:id', isValidID, jsonParser, ctrlWrapper(updateAdminTripController));

export default router;
