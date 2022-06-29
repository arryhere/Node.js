const EventsEmitter = require('events');

const customEmitter = new EventsEmitter();

customEmitter.on('response', (x, y) => {
    console.log(`success ${x}, ${y}`);
})
customEmitter.on('response', (y) => {
    console.log(`success...? ${y}`);
})

customEmitter.emit('response', 'foo', 2000)