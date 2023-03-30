const express = require('express');
const Fellow = require('./model-fellow');

const app = express();

app.use((req, res, next) => {
  const time = (new Date()).toLocaleString();
  console.log(`${req.method}: ${req.originalUrl} - ${time}`);
  next();
});

app.use((req, res, next) => {
  req.Fellow = Fellow;
  next();
});

app.get('/fellows', (req, res) => {
  res.send(req.Fellow.list());
});

const port = process.env.PORT || 8080;
const host = process.env.HOST || '127.0.0.1';

app.listen(port, host, () => {
  console.log(`Server is now running on http://${host}:${port}`);
});
