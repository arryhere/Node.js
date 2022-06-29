const fs = require('fs');
const path = require('path');

const data = fs.readFileSync(path.join(__dirname, '/10-00_read-1.txt'), 'utf-8');

fs.writeFileSync(path.join(__dirname, '/10-00_write-1.txt'), ``);
for (let i = 1; i <= 10000; i++) {
    if (i === 10000) {
        fs.writeFileSync(path.join(__dirname, '/10-00_write-1.txt'), `${i} - ${data}`, { flag: 'a' })
    }
    else {
        fs.writeFileSync(path.join(__dirname, '/10-00_write-1.txt'), `${i} - ${data}\n`, { flag: 'a' })
    }
}

const data2 = fs.readFileSync(path.join(__dirname, '/10-00_write-1.txt'), 'utf-8');
fs.stat(path.join(__dirname, '/10-00_write-1.txt'), (err, stats) => {
    console.log(stats.size);
})


console.log("---------------------------------------------------------------------------------------------------------------------------------");


/*
• using streams
• 
*/

setTimeout(() => {
    const stream = fs.createReadStream(path.join(__dirname, '/10-00_write-1.txt'), { highWaterMark: 100000, encoding: 'utf-8' });

    stream.on('data', (result) => {
        console.log(result);
    })
    stream.on('error', (error) => {
        console.log(error.message);
    })
}, 5000);

