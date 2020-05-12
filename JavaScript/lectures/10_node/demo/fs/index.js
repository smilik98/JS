const fs = require('fs');
const { promisify } = require('util');

const readFile = promisify(fs.readFile);

fs.readdir(__dirname, (err, result) => {
  if (!err) {
    console.log('Read dir result: ', result);
  }
})

readFile(__filename)
  .then((result) => {
          console.log('Read file result: ', result.toString());
  })
