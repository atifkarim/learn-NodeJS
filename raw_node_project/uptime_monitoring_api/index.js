/*
 * @File Name: index.js
 * @Title: Initial file of the project
 * @Description: This will start the server and workers
 * @Author: Atif Karim
 * @Date: 01/01/2024
 */

// dependencies

const server = require('./lib/server');
const workers = require('./lib/worker');

const { sendTwilioSms } = require('./helpers/notifications');

// app object - module scaffolding
const app = {};

app.init = () => {
    // start the server
    server.init();
    // start the workers
    workers.init();
};

app.init();

// export the app
module.exports = app;
