const express = require('express');
const app = express();
app.use(express.json());

const users = [];

app.get('/users', (req, res) => {
  res.send(users);
});

app.post('/users', (req, res) => {
  const { body: { name, password } } = req;
  const user = { name, password };
  users.push(user);
  res.sendStatus(201);
});

app.listen(8080, () => {
  console.log(`Server listening on localhost:8080`)
});