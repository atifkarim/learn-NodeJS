// This file will pass data from database/file to client as stream

const http = require('http');
const fs = require('fs');

// This server actually is a event emitter
const server = http.createServer((req, res) => {
    const myReadStream = fs.createReadStream(`${__dirname}/big.txt`, 'utf-8');
    myReadStream.pipe(res);
});

server.listen(3000);
console.log('Server is listening');
