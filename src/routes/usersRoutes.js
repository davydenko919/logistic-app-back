import express from 'express';

import { ctrlWrapper } from '../utils/ctrlWrapper.js';
// import {isValidID} from "../middlewares/isValidID.js";
// import {validateBody} from "../middlewares/validateBody.js";
// import {tripSchema} from "../validation/trip.js";

import {
    getUsersController,
} from '../controllers/usersControllers.js';

const router = express.Router();
// const jsonParser =express.json();

router.get('/', ctrlWrapper(getUsersController));


export default router;
