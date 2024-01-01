/*
 * @File Name: handleReqRes.js
 * @Title: Handle Request Response
 * @Description: Handle Request and Response
 * @Author: Atif Karim
 * @Date: 01/01/2024
 */

// Dependencies

const url = require('url');
const { StringDecoder } = require('string_decoder');
const routes = require('../routes');
const { notFoundHandler } = require('../handlers/routehandlers/notFoundHandler');

// module scaffolding

const handler = {};

handler.handleReqRes = (req, res) => {
    // request handling
    // get the url and parse it
    const parsedUrl = url.parse(req.url, true);
    const path = parsedUrl.pathname;
    const trimmedPath = path.replace(/^\/+|\/+$/g, '');
    const method = req.method.toLowerCase();
    const queryStringObjet = parsedUrl.query;
    const headersObject = req.headers;

    const requestProperties = {
        parsedUrl,
        path,
        trimmedPath,
        method,
        queryStringObjet,
        headersObject,
    };

    const decoder = new StringDecoder('utf-8');
    const realData = '';

    const choseHandler = routes[trimmedPath] ? routes[trimmedPath] : notFoundHandler;
    choseHandler(requestProperties, (statusCode, payLoad) => {
        statusCode = typeof statusCode === 'number' ? statusCode : 500;
        payLoad = typeof payLoad === 'object' ? payLoad : {};

        const payLoadString = JSON.stringify(payLoad);

        // return the final response
        res.writeHead(statusCode);
        res.end(payLoadString);
    });

    // req.on('data', (chunk) => {
    //     realData += decoder.write(chunk);
    // });

    // req.on('end', () => {
    //     realData += decoder.end();
    //     console.log(realData);
    // });
    // // response handel
    // res.end('new file');
};
module.exports = handler;
