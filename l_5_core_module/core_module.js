// Path Module

const path = require('path');

const myPath =    '/media/ash/BE0E05910E0543BD/University_of_Bremen_MSc/my_git_repos/learn-NodeJS/core_module.js';
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

fs.writeFileSync('hello.txt', 'Hello World!');
