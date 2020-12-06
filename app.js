const http = require('http');

const port = 3000;

const server = http.createServer((request, respond) => {
  respond.statusCode = 200;
  respond.setHeader('Content-Type', 'text/plain');
  respond.end('Hello!');
});

server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
