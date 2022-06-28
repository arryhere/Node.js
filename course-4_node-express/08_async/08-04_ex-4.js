const fs = require('fs')
const path = require('path')
const util = require('util')

const readFilePromise = util.promisify(fs.readFile)
const writeFilePromise = util.promisify(fs.writeFile)

const read_write = async () => {
    try {
        const file1 = await readFilePromise(path.join(__dirname, '/08-00_read-1.txt'), 'utf-8')
        const file2 = await readFilePromise(path.join(__dirname, '/08-00_read-2.txt'), 'utf-8')
        console.log(file1, file2)
        await writeFilePromise(path.join(__dirname, '/08-00_write-2.txt'), `${file1}\n${file2}\n`)
    } catch (error) {
        console.log(error.message)
    }
}
read_write()