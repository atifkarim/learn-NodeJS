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
const { checkHandler } = require('./handlers/routehandlers/checkHandler');

const routes = {
    sample: sampleHandler,
    user: userHandler,
    token: tokenHandler,
    check: checkHandler,
};

module.exports = routes;
