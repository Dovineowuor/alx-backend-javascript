const express = require('express');

const app = express();

app.use(express.json());

app.get('/', (_req, res) => {
  res.send('Welcome to the payment system');
});

app.get('/cart/:id(\\d+)', (req, res) => {
  const cartId = req.params.id;
  res.send(`Payment methods for cart ${cartId}`);
});

app.get('/available_payments', (_req, res) => {
  const paymentMethods = {
    payment_methods: {
      credit_cards: true,
      paypal: false,
    },
  };
  res.json(paymentMethods);
});

app.post('/login', (req, res) => {
  res.send(`Welcome ${req.body.userName}`);
});

const server = app.listen(7865, () => {
  console.log('API available on localhost port 7865');
});

module.exports = server;
