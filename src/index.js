import { initMongoConnection } from './db/initMongoConnection.js';

import express from 'express';
import PinoHttp from 'pino-http';
import cors from 'cors';

const PORT = 3000;

const app = express();



app.use(cors());

app.use(
  PinoHttp({
    transport: {
      target: 'pino-pretty',
    },
  }),
);

import { Trip } from './db/models/tripModel.js';

app.get('/trips', async (req, res) => {
  try {
    const trip = await Trip.find();
    res.send(trip);
  } catch (error) {
    console.error(error);
    res.status(500).send('server error');
  }
});

import { errorHandler } from './middlewares/errorHandler.js';
import { notFoundHandler } from './middlewares/notFoundHandler.js';

app.use(notFoundHandler);
app.use(errorHandler);
