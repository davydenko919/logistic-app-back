import express from 'express';

import tripRoutes from './routes/tripsRoutes.js';
import adminTrips from './routes/adminTrips.js';

import cookieParser from 'cookie-parser';

import { errorHandler } from './middlewares/errorHandler.js';
import { notFoundHandler } from './middlewares/notFoundHandler.js';
import authRoutes from './routes/auth.js';
import { auth } from './middlewares/auth.js';


const app = express();

app.use(cookieParser());

app.use('/auth', authRoutes);
app.use('/trips', auth, tripRoutes);
app.use('/admintrips', adminTrips);

app.use(notFoundHandler);
app.use(errorHandler);

export default app;
