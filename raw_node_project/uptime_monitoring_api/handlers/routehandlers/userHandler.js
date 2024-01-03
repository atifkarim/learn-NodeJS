/* eslint-disable no-underscore-dangle */
/* eslint-disable prettier/prettier */
/*
 * @File Name: userHandler.js
 * @Title: User Handler
 * @Description: Handler to handle user related routes
 * @Author: Atif Karim
 * @Date: 02/01/2024
 */

// dependencies
const data = require('../../lib/data');
const { hash } = require('../../helpers/utilities');
const { parseJSON } = require('../../helpers/utilities');

// module scaffolding
const handler = {};

handler.userHandler = (requestProperties, callback) => {
    const acceptedMethods = ['get', 'post', 'put', 'delete'];
    if (acceptedMethods.indexOf(requestProperties.method) > -1) {
        handler._users[requestProperties.method](requestProperties, callback);
    } else {
        callback(405);
    }
};

handler._users = {};

handler._users.post = (requestProperties, callback) => {
    const firstName = typeof requestProperties.body.firstName === 'string'
        && requestProperties.body.firstName.trim().length > 0
            ? requestProperties.body.firstName
            : false;

    const lastName = typeof requestProperties.body.lastName === 'string'
        && requestProperties.body.lastName.trim().length > 0
            ? requestProperties.body.lastName
            : false;

    const phone = typeof requestProperties.body.phone === 'string'
        && requestProperties.body.phone.trim().length === 11
            ? requestProperties.body.phone
            : false;

    const password = typeof requestProperties.body.password === 'string'
        && requestProperties.body.password.trim().length > 0
            ? requestProperties.body.password
            : false;

    const tosAgreement = typeof requestProperties.body.tosAgreement === 'boolean'
        && requestProperties.body.tosAgreement
            ? requestProperties.body.tosAgreement
            : false;

    if (firstName && lastName && phone && password && tosAgreement) {
        // make sure the user does not already exist
        data.read('users', phone, (readErr) => {
            // Here error exist means that the file does not exist which is desired here,
            // Otherwise, a user can not be entries because, file exists means user is
            // already registered
            if (readErr) {
                const userObject = {
                    firstName,
                    lastName,
                    phone,
                    password: hash(password),
                    tosAgreement,
                };
                // store the user to db
                data.create('users', phone, userObject, (createErr) => {
                    if (!createErr) {
                        callback(200, {
                            message: 'User was created successfully!',
                        });
                    } else {
                        callback(404, { error: 'Could not create user!' });
                    }
                });
            } else {
                callback(404, { error: 'Server error: User already exists' });
            }
        });
    } else {
        callback(400, { error: 'You have a problem in your request' });
    }
};

handler._users.get = (requestProperties, callback) => {
    // check the phone number if valid
    const phone = typeof requestProperties.queryStringObject.phone === 'string'
        && requestProperties.queryStringObject.phone.trim().length === 11
            ? requestProperties.queryStringObject.phone
            : false;
    console.log('typeof phone: ', requestProperties.queryStringObject);
    console.log('phone: ', phone);
    if (phone) {
        // lookup the user
        data.read('users', phone, (err, u) => {
            const user = { ...parseJSON(u) };
            if (!err && user) {
                delete user.password;
                callback(200, user);
            } else {
                callback(404, {
                    error: 'Requested user object was not found!',
                });
            }
        });
    } else {
        callback(404, {
            error: 'Requested user file was not found!',
        });
    }
};

handler._users.put = (requestProperties, callback) => {};

handler._users.delete = (requestProperties, callback) => {};

module.exports = handler;
