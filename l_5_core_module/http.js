const http = require('http');

// This server actually is a event emitter
const server = http.createServer();

server.on('connection', () => {
    console.log('New connection');
});

server.listen(3000);
console.log('Server is listening');
