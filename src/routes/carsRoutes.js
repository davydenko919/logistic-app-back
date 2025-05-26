import express from 'express';

import { ctrlWrapper } from '../utils/ctrlWrapper.js';

import {
    getCarsController,
} from '../controllers/carsControllers.js';

const router = express.Router();
// const jsonParser =express.json();

router.get('/', ctrlWrapper(getCarsController));


export default router;
