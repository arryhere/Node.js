const http = require('http')
const fs = require('fs')
const path = require('path')

http.createServer(function (req, res) {
    // const text = fs.readFileSync('./content/big.txt', 'utf8')
    // res.end(text)
    const fileStream = fs.createReadStream(path.join(__dirname, '/10-00_write-1.txt'), 'utf-8')
    fileStream.on('open', () => {
        fileStream.pipe(res)
    })
    fileStream.on('error', (err) => {
        res.end(err)
    })
}).listen(port = 80, hostname = '127.0.0.1', () => { console.log(`Server is listening at: http://${hostname}:${port}`) })