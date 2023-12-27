const fs = require('fs');

const ourStream = fs.createReadStream(`${__dirname}/big.txt`);

ourStream.on('data', (data) => {
    console.log(data);
});
