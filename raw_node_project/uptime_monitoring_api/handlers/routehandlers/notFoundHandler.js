/*
 * @File Name: notFoundHandler.js
 * @Title: Not Found Handler
 * @Description: Not Found Handler
 * @Author: Atif Karim
 * @Date: 01/01/2024
 */

// module scaffolding
const handler = {};

handler.notFoundHandler = (requestProperties, callback) => {
    callback(404, { message: 'URL is not found' });
};

module.exports = handler;
