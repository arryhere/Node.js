const http = require('http');

const server = http.createServer();

server.on('request', (req,res) => {
    res.end('Hello World');
})

server.listen(port = 80, () => {
    console.log(`Server is listening at port http://localhost:${port}`);
})