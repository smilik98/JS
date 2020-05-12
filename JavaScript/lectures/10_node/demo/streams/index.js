const fs = require('fs');
const stream = require('stream');

const writeStream = fs.createWriteStream('result.txt');

const uppercase = new stream.Transform();
uppercase._transform = (data, enc, cb) => {
    cb(null, data.toString().toUpperCase());
};

fs
.createReadStream(__filename)
.pipe(uppercase)
.pipe(writeStream)
