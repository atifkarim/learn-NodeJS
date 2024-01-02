/*
 * Title: Utilities
 * Description: Important utility functions
 * Author: Atif Karim
 * Date: 02/01/2024
 *
 */

// dependencies

// module scaffolding
const crypto = require('crypto');

const utilities = {};
const environments = require('./environments');

// parse JSON string to Object
utilities.parseJSON = (jsonString) => {
    let output;

    try {
        output = JSON.parse(jsonString);
    } catch {
        output = {};
    }

    return output;
};

// export module
module.exports = utilities;
