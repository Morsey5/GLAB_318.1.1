const http = require('http');

//location and port of our server 
const hostname = '127.0.0.1';
const port = 3000;

//create server
const server = http.createServer((req, res) => {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/plain');
      res.end('Hello World!\n');
});

server.listen(port, hostname, () => {
    console.log(`server running at http://${hostname}:${port}/`);
});