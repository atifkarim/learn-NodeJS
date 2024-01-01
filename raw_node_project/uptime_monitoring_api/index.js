/*
 * @File Name: index.js
 * @Title: Uptime monitoring application
 * @Description: A RESTFul API to monitor up or down time of user defined links
 * @Author: Atif Karim
 * @Date: 01/01/2024
 */

// dependencies

const http = require('http');
const { handleReqRes } = require('./helpers/handleReqRes.js');
const environment = require('./helpers/environments.js');
const data = require('./lib/data');

// app object - module scaffolding

const app = {};

// testing purpose to create file

// data.create('test', 'newFile', { land: 'Bangladesh', language: 'bangla' }, (err) => {
//     console.log('Error is in Index file level : ', err);
// });

// testing purpose to read file
// data.read('test', 'newFile', (err, data) => {
//     console.log(err, ' -- ', data);
// });

// testing purpose to update file

// data.update('test', 'newFile', { land: 'Germany', language: 'Deutsch' }, (err) => {
//     console.log(err);
// });

// testing purpose to update file
data.delete('test', 'newFile', (err) => {
    console.log(err);
});

// create server

app.createServer = () => {
    const server = http.createServer(app.handleReqRes);
    server.listen(environment.port, () => {
        console.log(`Server is listening to ${environment.port} port`);
    });
};

// handle request response

app.handleReqRes = handleReqRes;

// start the server
app.createServer();
