console.log('start');

const process = setInterval(() => {
    console.log('Hello Earth');
}, 1000);

setTimeout(() => {
    console.log('...');
    clearInterval(process);
}, 5000);

console.log('end');