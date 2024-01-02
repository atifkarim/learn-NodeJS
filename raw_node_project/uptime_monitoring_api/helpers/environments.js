/*
 * @File Name: environments.js
 * @Title: Environments Variable
 * @Description: Environments Variable
 * @Author: Atif Karim
 * @Date: 01/01/2024
 */
// dependencies
// module scaffolding

const environments = {};

environments.staging = {
    port: 3000,
    envName: 'staging',
    secretKey: 'hsjdhsdhsjdhjshdjshd',
};

environments.production = {
    port: 5000,
    envName: 'production',
    secretKey: 'djkdjskdjksdjksjdskjd',
};

// determine which environment was passed
const currentEnvironment =    typeof process.env.NODE_ENV === 'string' ? process.env.NODE_ENV : 'staging';

// export corresponding environment object
const environmentToExport =    typeof environments[currentEnvironment] === 'object'
        ? environments[currentEnvironment]
        : environments.staging;

// export module
module.exports = environmentToExport;
