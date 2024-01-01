/*
 * @File Name: sampleHandler.js
 * @Title: Sample Handler
 * @Description: Sample Handler
 * @Author: Atif Karim
 * @Date: 01/01/2024
 */

// module scaffolding
const handler = {};

handler.sampleHandler = (requestProperties, callback) => {
    callback(200, { message: 'This is a sample URL' });
};

module.exports = handler;
