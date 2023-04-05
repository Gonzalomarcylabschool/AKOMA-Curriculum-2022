const http = require('http');
const url = require('url');
require('dotenv').config(); // to use .env which hold your environmental variables
const host = process.env.HOST
const PORT = process.env.PORT;

const requestListener = (req, res) => {

    // Parse the request url and parse the query params into an object
    const baseUrl = url.parse(req.url);
    console.log('baseUrl:', baseUrl);
    
    // We want the pathname 
    const { pathname } = baseUrl;
    console.log('pathname:', pathname);

    // Delegate to the appropriate route handler
    switch(pathname) {
        case '/':
            return homeHandler(req, res);
        case '/hello':
            return helloHandler(req, res);
        default:
            return errorHandler(req, res);
    }
  
}

const homeHandler = (req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'} );
  res.write("Welcome to the home page");
  res.end();
}

const helloHandler = (req, res) => {
  const parseQueryParams = true;
  const baseUrl = url.parse(req.url, parseQueryParams);
  const { query } = baseUrl;
  const { name } = query;
  const message = `Hello ${name || 'stranger'}!`;
  res.writeHead(201);
  res.write(message);
  res.end();
}

const errorHandler = (req, res) => {
  // we can chain these calls together
  res.writeHead(404).end('Page does not exist');
}

const server = http.createServer(requestListener);

server.listen(PORT, host, () => {
  console.log(`Server is running on http://${host}:${PORT}`);
});