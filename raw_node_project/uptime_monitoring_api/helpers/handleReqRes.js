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

// moduel scaffholding

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
    res.end('new file');
};
module.exports = handler;
