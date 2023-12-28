// This file will show process of read and write data in stream

const fs = require('fs');

const ourReadStream = fs.createReadStream(`${__dirname}/big.txt`);
const ourWriteStream = fs.createWriteStream(`${__dirname}/big_write.txt`);

ourReadStream.on('data', (data) => {
    // console.log(data);
    ourWriteStream.write(data);
});
// ourReadStream.on('data', (data) => {
//     console.log(data.toString());
// });

console.log('hello world');
