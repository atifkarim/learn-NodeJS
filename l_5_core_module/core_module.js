// Path Module

const path = require('path');

const myPath =
    '/media/ash/BE0E05910E0543BD/University_of_Bremen_MSc/my_git_repos/learn-NodeJS/core_module.js';
console.log('Parse info: ', path.parse(myPath));
console.log('Basename: ', path.basename(myPath));
console.log('Directory: ', path.dirname(myPath));

// OS module

const os = require('os');

console.log(`platform: ${os.platform()}`);
console.log(`release: ${os.release()}`);
console.log(`type: ${os.type()}`);
console.log(`totalmem: ${os.totalmem()}`);
console.log(`homedir: ${os.homedir()}`);
console.log(`freemem: ${os.freemem()}`);
console.log('coreinfo: ', os.cpus());

// FS module

const fs = require('fs');

// Write in file
fs.writeFileSync('hello.txt', 'Hello World!');
fs.appendFileSync('hello.txt', '\nI am fine!');

// Read from file
console.log('Binary format data: ', fs.readFileSync('hello.txt'));
console.log('String format data:\n', fs.readFileSync('hello.txt').toString());

// Asynchronous way of reading the file
// The firmer method was synchronous but we know that NODE JS works in a asynchronous way
// Every function of NODE JS has a synchronous and asynchronous method.
// Following methods will rewrite the former read operation in a asynchronous way

// Here, instead of utf8, data.toString() can also be used to read the file
// Remember about the err, data args. They are the common args for all asynchronous functions.
// If wrong data comes from file, it will throw an error. Else, it will return  the data.
fs.readFile('hello.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
});

// EventEmitter

const EventEmitter = require('events');