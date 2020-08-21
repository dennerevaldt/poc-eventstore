const express = require('express');
const HttpStatus = require('http-status-codes');

const { addCard, removeCard, getValidCards } = require('./commands/card/');

const app = express();

app.use(express.json());

app.get('/status', (req, res, next) => res.sendStatus(200));

app.post('/card/add', async (req, res, next) => {
  await addCard(req.body);
  return res.sendStatus(HttpStatus.NO_CONTENT);
});

app.post('/card/remove', async (req, res, next) => {
  await removeCard(req.body);
  return res.sendStatus(HttpStatus.NO_CONTENT);
});

app.get('/card', async (req, res, next) => {
  const data = await getValidCards();
  return res.send(data);
});

app.listen(3000, function () {
  console.log('Listening on PORT 3000');
});
