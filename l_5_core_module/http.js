const http = require('http');

// This server actually is a event emitter
const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.write('Hello guys');
        res.write('Alles Gut!');
        res.end();
    } else if (req.url === '/hello') {
        res.write('Hello World!');
        res.end();
    } else {
        res.write('404 Not Found');
        res.end();
    }
});

server.on('connection', () => {
    console.log('New connection');
});

server.listen(3000);
console.log('Server is listening');
