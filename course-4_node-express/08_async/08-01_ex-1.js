const { readFile } = require('fs');

console.log('start');

readFile('./08_async/08-00_read-1.txt','utf-8', (err, data) => {
    if(err){
        console.log(err.message);
    }
    console.log(data);
})

console.log('end');