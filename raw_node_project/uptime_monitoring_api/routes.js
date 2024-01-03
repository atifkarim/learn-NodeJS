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
const { tokenHandler } = require('./handlers/routehandlers/tokenHandler');

const routes = {
    sample: sampleHandler,
    user: userHandler,
    token: tokenHandler,
};

module.exports = routes;
