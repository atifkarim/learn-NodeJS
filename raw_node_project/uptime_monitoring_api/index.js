/*
 * @File Name: app.js
 * @Title: Uptime monitoring application
 * @Description: A RESTFul API to monitor up or down time of user defined links
 * @Author: Atif Karim
 * @Date: 01/01/2024
 */

// dependencies

const http = require('http');

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
    // response handel
    res.end('hello world');
};

// start the server
app.createServer();
