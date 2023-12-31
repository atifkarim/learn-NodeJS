// In this file a simple http server will take big data from
// user in form and pass it to another url as buffer

const http = require('http');

// This server actually is a event emitter
const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.write('<html><head><title>Form</title></head>');
        res.write(
            '<body><form method="POST" action="/process"><input name="message" /></form></body>',
        );
        res.end();
    } else if (req.url === '/process' && req.method === 'POST') {
        const body = [];
        req.on('data', (data) => {
            body.push(data);
        });

        req.on('end', () => {
            console.log('Data received');
            const parseBody = Buffer.concat(body);
            console.log(parseBody);
            res.write('Thanks for providing data');
            res.end();
        });
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
