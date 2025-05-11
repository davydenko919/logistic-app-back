import express from 'express';

import tripRoutes from './routes/tripsRoutes.js';

import { errorHandler } from './middlewares/errorHandler.js';
import { notFoundHandler } from './middlewares/notFoundHandler.js';
import authRoutes from './routes/auth.js';

const app = express();

app.use('/auth', authRoutes);
app.use('/trips', tripRoutes);

app.use(notFoundHandler);
app.use(errorHandler);

export default app;
