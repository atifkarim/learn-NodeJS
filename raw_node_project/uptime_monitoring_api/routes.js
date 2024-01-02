/*
 * @File Name: routes.js
 * @Title: Routes
 * @Description: Application routes
 * @Author: Atif Karim
 * @Date: 01/01/2024
 */

// Dependencies

const { sampleHandler } = require('./handlers/routehandlers/sampleHandler');
const { userHandler } = require('./handlers/routehandlers/userHandler');

const routes = {
    sample: sampleHandler,
    user: userHandler,
};

module.exports = routes;
