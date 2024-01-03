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
const { parseJSON } = require('./utilities');
// module scaffolding

const handler = {};

handler.handleReqRes = (req, res) => {
    // request handling
    // get the url and parse it
    const parsedUrl = url.parse(req.url, true);
    const path = parsedUrl.pathname;
    const trimmedPath = path.replace(/^\/+|\/+$/g, '');
    const method = req.method.toLowerCase();
    const queryStringObject = parsedUrl.query;
    const headersObject = req.headers;

    const requestProperties = {
        parsedUrl,
        path,
        trimmedPath,
        method,
        queryStringObject,
        headersObject,
    };

    const decoder = new StringDecoder('utf-8');
    let realData = '';

    const choseHandler = routes[trimmedPath] ? routes[trimmedPath] : notFoundHandler;

    req.on('data', (chunk) => {
        realData += decoder.write(chunk);
    });

    req.on('end', () => {
        realData += decoder.end();

        requestProperties.body = parseJSON(realData);
        choseHandler(requestProperties, (statusCode, payLoad) => {
            let statusCodeReassign = 0;
            statusCodeReassign = typeof statusCode === 'number' ? statusCode : 500;

            if (statusCodeReassign === 500) {
                return;
            }

            let payLoadReassign = '';
            payLoadReassign = typeof payLoad === 'object' ? payLoad : {};

            const payLoadString = JSON.stringify(payLoadReassign);

            // return the final response
            res.setHeader('Content-Type', 'application/json');
            res.writeHead(statusCodeReassign);
            res.end(payLoadString);
        });
    });
    // response handel
    // res.end('new file');
};
module.exports = handler;
