import express from 'express';

const PORT = 3000;

const app = express();

app.get('/', (req, res) => {
  // тіло функції-обробника
});

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
}); 
