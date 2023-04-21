

const app = require('./server');

const port = process.env.PORT || 8080;
const host = process.env.HOST || 'localhost';

app.listen(port, host, () => {
  console.log(`Server is now running on http://${host}:${port}`);
});
