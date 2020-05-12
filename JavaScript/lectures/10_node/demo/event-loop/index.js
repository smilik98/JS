const fs = require('fs');

Promise.resolve().then(() => console.log('promise'))
console.log('main');

fs.readFile(__filename, () => {
    console.log('poll phase');
    Promise.resolve().then(() => console.log('promise'))

    process.nextTick(() => console.log('next tick'))

    setTimeout(() => console.log('setTimeout'))

    setImmediate(() => {
        console.log('setImmediate')
        Promise.resolve().then(() => console.log('promise'))
        process.nextTick(() => console.log('next tick'))
    })
}) 