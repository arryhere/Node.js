
const EventEmitter = require('events');

class MyEmitter extends EventEmitter { }

const myEmitter = new MyEmitter();
myEmitter.on('event', () => {
    console.log('Inside callback');
    setTimeout(() => {
        console.log('an event occurred!');
    }, 3000);
});

console.log('START OF LINE');

myEmitter.emit('event');

console.log('END OF LINE');