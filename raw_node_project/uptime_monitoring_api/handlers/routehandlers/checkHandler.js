/* eslint-disable no-underscore-dangle */
/* eslint-disable prettier/prettier */
/*
 * @File Name: checkHandler.js
 * @Title: Check Handler
 * @Description: Handler to handle user defined checks
 * @Author: Atif Karim
 * @Date: 03/01/2024
 */

// dependencies
const data = require('../../lib/data');
const { hash } = require('../../helpers/utilities');
const { parseJSON } = require('../../helpers/utilities');
const tokenHandler = require('./tokenHandler');

// module scaffolding
const handler = {};

handler.userHandler = (requestProperties, callback) => {
    const acceptedMethods = ['get', 'post', 'put', 'delete'];
    if (acceptedMethods.indexOf(requestProperties.method) > -1) {
        handler._check[requestProperties.method](requestProperties, callback);
    } else {
        callback(405);
    }
};

handler._check = {};

handler._check.post = (requestProperties, callback) => {
};

handler._check.get = (requestProperties, callback) => {
};

handler._check.put = (requestProperties, callback) => {
};

handler._check.delete = (requestProperties, callback) => {
};

module.exports = handler;
