const express = require('express');

const app = express();

app.get('/', (_req, res) => {
  res.send('Welcome to the payment system');
});

app.get('/cart/:id(\\d+)', (req, res) => {
  const cartId = req.params.id;
  res.send(`Payment methods for cart ${cartId}`);
});

const server = app.listen(7865, () => {
  console.log('API available on localhost port 7865');
});

module.exports = server;
