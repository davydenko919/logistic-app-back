// import {
//   getCars,
// } from '../services/carsServices.js';

export async function getCarsController(req, res) {


  res.json({
    status: 200,
    message: 'Here is the array of cars',
    data: [
  { number: "СА7263ІК" },
  { number: "СА3481НЕ" },
  { number: "СА5938ТХ" },
  { number: "СА2047КМ" },
  { number: "СА8312ОР" },
  { number: "СА1175АС" },
  { number: "СА4690ВА" },
  { number: "СА7751ЕН" },
  { number: "СА6302ІН" },
  { number: "СА9834ХТ" },
],
  });
}
