import express from 'express';

import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import {isValidID} from "../middlewares/isValidID.js";
import {validateBody} from "../middlewares/validateBody.js";
import {refuelingSchema} from "../validation/refueling.js";
import {putRefuelingSchema} from "../validation/refueling.js";

import {
    getRefuelingsController,
    getRefuelingController,
    createRefuelingController,
    deleteRefuelingController,
    updateRefuelingController,
} from '../controllers/refuelingsControllers.js';

const router = express.Router();
const jsonParser =express.json();

router.get('/', ctrlWrapper(getRefuelingsController));

router.get('/:id', isValidID, ctrlWrapper(getRefuelingController));

router.post('/', jsonParser, validateBody(refuelingSchema), ctrlWrapper(createRefuelingController));

router.delete('/:id', isValidID, ctrlWrapper(deleteRefuelingController));

router.put('/:id', isValidID, jsonParser, validateBody(putRefuelingSchema), ctrlWrapper(updateRefuelingController));

export default router;
