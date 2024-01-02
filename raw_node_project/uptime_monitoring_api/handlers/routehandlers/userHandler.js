/*
 * @File Name: userHandler.js
 * @Title: User Handler
 * @Description: Handler to handle user related routes
 * @Author: Atif Karim
 * @Date: 02/01/2024
 */

// module scaffolding
const handler = {};

handler.userHandler = (requestProperties, callback) => {
    const acceptedMethods = ['get', 'post', 'put', 'delete'];
    if (acceptedMethods.indexOf(requestProperties.method) > -1) {
        callback(200, { message: 'This is a user URL' });
    } else {
        callback(405);
    }
};

module.exports = handler;
