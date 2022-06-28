const fs = require('fs').promises
const path = require('path')

const read_write = async () => {
    try {
        const file1 = await fs.readFile(path.join(__dirname, '/08-00_read-1.txt'), 'utf-8')
        const file2 = await fs.readFile(path.join(__dirname, '/08-00_read-2.txt'), 'utf-8')
        console.log(file1, file2)
        await fs.writeFile(path.join(__dirname, '/08-00_write-3.txt'), `${file1}\n${file2}\n`)
    } catch (error) {
        console.log(error.message)
    }
}
read_write()