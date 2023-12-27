const http = require('http');

// This server actually is a event emitter
const server = http.createServer();

server.listen(3000);
console.log('Server is listening');
