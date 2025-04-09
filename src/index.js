import express from 'express';
import PinoHttp from 'pino-http';

const PORT = 3000;

const app = express();

app.use(PinoHttp({
  transport:{
    target: "pino-pretty"
  }
}))

app.get('/', (req, res) => {
  // тіло функції-обробника
});

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
