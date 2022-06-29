const EventEmitter = require('events');

class Emitter extends EventEmitter {
    constructor(id = null, value = null){
        super();
        this.id = id;
        this.value = value;
    }
    get info() {
        return {
            id: this.id,
            value: this.value
        }
    }
}

const myEmitter = new Emitter(21, 'foo');

myEmitter.on('event', (x, y) => {
    setTimeout(() => {
        console.log(myEmitter.info);
        console.log(x,y);
    }, 2000);
})

myEmitter.emit('event', 'params', 'moreparams')