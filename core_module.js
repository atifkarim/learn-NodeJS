const path = require('path');

const myPath =
    '/media/ash/BE0E05910E0543BD/University_of_Bremen_MSc/my_git_repos/learn-NodeJS/core_module.js';
console.log(path.parse(myPath));

const os = require('os');

console.log(`platform: ${os.platform()}`);
console.log(`release: ${os.release()}`);
console.log(`type: ${os.type()}`);
console.log(`totalmem: ${os.totalmem()}`);
console.log(`homedir: ${os.homedir()}`);
console.log(`freemem: ${os.freemem()}`);
console.log('coreinfo: ', os.cpus());
