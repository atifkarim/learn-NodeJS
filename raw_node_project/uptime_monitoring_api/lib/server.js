/*
 * @File Name: server.js
 * @Title: Node server file
 * @Description: This will create the node server
 * @Author: Atif Karim
 * @Date: 05/01/2024
 */

// dependencies

const http = require('http');
require('dotenv').config();
const { handleReqRes } = require('../helpers/handleReqRes.js');
const environment = require('../helpers/environments.js');
const data = require('./data');

const { sendTwilioSms } = require('../helpers/notifications');

// server object - module scaffolding

const server = {};

// Get user phone number
const { myPhone } = process.env;

// @TODO remove later
// sendTwilioSms(`${myPhone}`, 'Hello world', (err) => {
//     console.log('Twilio Error this is the error', err);
// });

// // testing purpose to create file
// data.create('test', 'newFile', { land: 'Bangladesh', language: 'bangla' }, (createErr) => {
//     console.log('Creating Error : ', createErr);
// });

// // testing purpose to read file
// data.read('test', 'newFile', (readErr, readData) => {
//     console.log('Read Error: ', readErr, ' -- ', 'Read Data: ', readData);
// });

// // testing purpose to update file

// data.update('test', 'newFile', { land: 'Germany', language: 'Deutsch' }, (updateErr) => {
//     console.log('Update Error: ', updateErr);
// });

// // testing purpose to update file
// data.delete('test', 'newFile', (deleteErr) => {
//     console.log('Delete Error: ', deleteErr);
// });

// create server
server.createServer = () => {
    const createServerVariable = http.createServer(server.handleReqRes);
    createServerVariable.listen(environment.port, () => {
        console.log(`Server is listening to ${environment.port} port`);
    });
};

// handle Request Response
server.handleReqRes = handleReqRes;

// start the server
server.init = () => {
    server.createServer();
};

// export
module.exports = server;
