const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'content-type': 'text/html' });
    res.write('<h1>Hello</h1>');
    res.end();
})

server.listen(port = 80, hostname = '127.0.0.1', () => {
    console.log(`Server running at port: http://${hostname}:${port}`);
})