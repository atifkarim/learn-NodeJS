/*
 * @File Name: app.js
 * @Title: Uptime monitoring application
 * @Description: A RESTFul API to monitor up or down time of user defined links
 * @Author: Atif Karim
 * @Date: 01/01/2024
 */

// dependencies

const http = require('http');
const { StringDecoder } = require('string_decoder');
const url = require('url');

// app object - module scaffolding

const app = {};

// Configuration

app.config = {
    port: 3000,
};

// create server

app.createServer = () => {
    const server = http.createServer(app.handleReqRes);
    server.listen(app.config.port, () => {
        console.log(`Server is listening to ${app.config.port} port`);
    });
};

// handle request response

app.handleReqRes = (req, res) => {
    // request handling
    // get the url and parse it
    const parsedUrl = url.parse(req.url, true);
    const path = parsedUrl.pathname;
    const trimmedPath = path.replace(/^\/+|\/+$/g, '');
    const method = req.method.toLowerCase();
    const queryStringObjet = parsedUrl.query;
    const headersObject = req.headers;

    const decoder = new StringDecoder('utf-8');
    let realData = '';
    req.on('data', (chunk) => {
        realData += decoder.write(chunk);
    });

    req.on('end', () => {
        realData += decoder.end();
        console.log(realData);
    });
    // response handel
    res.end('hello world');
};

// start the server
app.createServer();
