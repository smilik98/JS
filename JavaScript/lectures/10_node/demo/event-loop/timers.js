const start = Date.now();

setTimeout(() => {
    const time = Date.now() - start;
    console.log(time);

   Array(10000000).fill(2).map((a, i) => a ** i);
}, 100)

setTimeout(() => {
    const time = Date.now() - start;
    console.log(time);
}, 200)
