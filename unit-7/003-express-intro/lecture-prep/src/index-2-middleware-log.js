const express = require('express');

const app = express();

app.use((req, res, next) => {
  const time = (new Date()).toLocaleString();
  console.log(`${req.method}: ${req.originalUrl} - ${time}`);
  next();
});

app.get('/', (req, res) => {
  res.send('Hi');
});

app.get('*', (req, res) => {
  res.send({ msg: 'Check the node console!' });
});

const port = process.env.PORT || 8080;
const host = process.env.HOST || '127.0.0.1';

app.listen(port, host, () => {
  console.log(`Server is now running on http://${host}:${port}`);
});
