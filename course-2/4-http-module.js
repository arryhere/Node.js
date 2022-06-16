const http = require('http');
const fs = require('fs');

const fileContent = fs.readFileSync('course-2/file3.html', 'utf-8');

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-type': 'text/html' });
    res.end(fileContent);
})

server.listen(port = 4000, hostname = '127.0.0.1', () => {                  // port 80 for using only ip, no need to add port in url
    console.log(`Server running at http://${hostname}:${port}/`);
})