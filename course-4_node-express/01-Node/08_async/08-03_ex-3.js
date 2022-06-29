const fs = require('fs')
const path = require('path')

console.log('start')

const read = (path) => {
    return new Promise((resolve, reject) => {
        fs.readFile(path, 'utf-8', (err, data) => {
            if (err) {
                reject(err.message)
            }
            resolve(data)
        })
    })
}

read(path.join(__dirname, '/08-00_read-1.txt'))
    .then((res) => { console.log(res); })
    .catch((rej) => { console.log(rej); })

read(path.join(__dirname, '/08-00_read-2.txt'))
    .then((res) => { console.log(res); })
    .catch((rej) => { console.log(rej); })


async function read_write() {
    const file1 = await read(path.join(__dirname, '/08-00_read-1.txt'))
    const file2 = await read(path.join(__dirname, '/08-00_read-2.txt'))
    console.log(file1, file2);
    fs.writeFile(path.join(__dirname, '/08-00_write-1.txt'), `${file1}\n${file2}\n`, (err, result) => {
        if (err) { console.log(err.msg) }
        else { console.log('success') }
    })
}
read_write()

console.log('end');