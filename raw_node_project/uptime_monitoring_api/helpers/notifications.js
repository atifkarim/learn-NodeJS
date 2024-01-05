/*
 * Title: Notifications Library
 * Description: Important functions to notify users
 * Author: Atif Karim
 * Date: 04/01/2024
 *
 */

// dependencies
const https = require('https');
const querystring = require('querystring');
require('dotenv').config();

// module scaffolding
const notifications = {};

const { twilioFromPhone } = process.env;
console.log('twilioFromPhone: ', twilioFromPhone);

const { twilioAccountSid } = process.env;
console.log('twilioAccountSid: ', twilioAccountSid);

const { twilioAuthToken } = process.env;
console.log('twilioAuthToken: ', twilioAuthToken);

// send sms to user using twilio api
notifications.sendTwilioSms = (phone, msg, callback) => {
    // input validation
    const userPhone =        typeof phone === 'string' && phone.trim().length === 11 ? phone.trim() : false;

    const userMsg =        typeof msg === 'string' && msg.trim().length > 0 && msg.trim().length <= 1600
            ? msg.trim()
            : false;
    console.log('userPhone: ', userPhone);

    if (userPhone && userMsg) {
        // configure the request payload
        const payload = {
            From: twilioFromPhone,
            // From: twilio.fromPhone,
            To: `+49${userPhone}`,
            Body: userMsg,
        };

        // stringify the payload
        const stringifyPayload = querystring.stringify(payload);

        // configure the request details
        const requestDetails = {
            hostname: 'api.twilio.com',
            method: 'POST',
            path: `/2010-04-01/Accounts/${twilioAccountSid}/Messages.json`,
            auth: `${twilioAccountSid}:${twilioAuthToken}`,
            // path: `/2010-04-01/Accounts/${twilio.accountSid}/Messages.json`,
            // auth: `${twilio.accountSid}:${twilio.authToken}`,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
        };

        // instantiate the request object
        const req = https.request(requestDetails, (res) => {
            // get the status of the sent request
            const status = res.statusCode;
            console.log('status: ', status);
            // callback successfully if the request went through
            if (status === 200 || status === 201) {
                callback(true);
            } else {
                callback(`Status code returned was ${status}`);
            }
        });

        req.on('error', (e) => {
            callback(e);
        });

        req.write(stringifyPayload);
        req.end();
    } else {
        callback('Given parameters were missing or invalid!');
    }
};

// export the module
module.exports = notifications;
