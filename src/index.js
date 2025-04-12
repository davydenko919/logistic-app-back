import { initMongoConnection } from './db/initMongoConnection.js';

import express from 'express';
import PinoHttp from 'pino-http';
import cors from 'cors';

const PORT = 3000;

const app = express();

async function bootstrap() {
  try {
    await initMongoConnection();
    app.listen(PORT, () => {
      console.log(`Server is running on ${PORT}`);
    });
  } catch (error) {
    console.error(error);
  }
}

bootstrap();

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

app.get('/books', (req, res) => {
  res.send('Books');
});
