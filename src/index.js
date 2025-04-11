import express from 'express';
import PinoHttp from 'pino-http';
import cors from 'cors';

const PORT = 3000;

const app = express();

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
app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
