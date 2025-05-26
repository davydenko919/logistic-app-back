import express from 'express';

import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import {isValidID} from "../middlewares/isValidID.js";
import {validateBody} from "../middlewares/validateBody.js";
import {userPutSchema} from "../validation/user.js";

import {
    getUsersController,
    getUserController,
    updateUserController
} from '../controllers/usersControllers.js';

const router = express.Router();
const jsonParser =express.json();

router.get('/', ctrlWrapper(getUsersController));
router.get('/:id', isValidID, ctrlWrapper(getUserController));
router.put('/:id', jsonParser, isValidID, validateBody(userPutSchema), ctrlWrapper(updateUserController));

export default router;
