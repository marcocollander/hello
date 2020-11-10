const http = require('http');

const port = process.env.PORT || 1337;
const server = http.createServer((req, rest) => {
  rest.writeHead(200, {'Content-Type': 'text/plain'});
  rest.end('Hello world!');
});

server.listen(port, () => {
  console.log(`The server is listening : ${server.address().address}:
  ${server.address().port}`);
});
