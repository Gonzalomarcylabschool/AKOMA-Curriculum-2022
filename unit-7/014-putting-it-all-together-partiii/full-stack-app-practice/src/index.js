const server = require('./server');// import express 
/* start the server */
const port = process.env.PORT || 8080; 
const host = process.env.HOST || '127.0.0.1';

server.listen(port, host, () => { // this is what turns on our sever!
  console.log(`Server is now running on http://localhost:${port}`);
});