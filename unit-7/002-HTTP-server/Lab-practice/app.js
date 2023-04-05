const url = require('url');
const http = require('http');
require('dotenv').config();

const HOST = process.env.HOST;
const PORT = process.env.PORT;

const requestListener = (req, res) => {
  const baseUrl = url.parse(req.url, true);
  const { query } = baseUrl;
  const { name } = query;
  console.log(baseUrl)
  res.writeHeader(200);
  res.write(`welcome ${name}`);
  res.end();
}

const server = http.createServer(requestListener);

server.listen(PORT, HOST, (req, res)=>{
  console.log(`Server is running on http://${HOST}:${PORT}`);
})



