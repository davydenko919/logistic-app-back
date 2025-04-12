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
  };

  bootstrap();


app.use(
  cors(),
);

app.use(
  PinoHttp({
    transport: {
      target: 'pino-pretty',
    },
  }),
);

app.get('/', (req, res) => {
  res.send('Hello, Express');
});

app.get('/movies', (req, res) => {
  res.send('Movies');
});

app.get('/books', (req, res) => {
  res.send('Books');
});


