const http = require('http');
const fs = require('fs');
const path = require('path');

const port = 80;
const hostname = '127.0.0.1';

const server = http.createServer((req, res)=>{
    res.statusCode = 200;
    res.setHeader('Content-type', 'text/html');
    
    if(req.url === '/'){
        res.end(fs.readFileSync(path.join(__dirname, '/templates/index.html'), 'utf-8'));
    }
    else if(req.url === '/about'){
        res.end(fs.readFileSync(path.join(__dirname, '/templates/about.html'), 'utf-8'));
    }
    else if(req.url === '/contact'){
        res.end(fs.readFileSync(path.join(__dirname, '/templates/contact.html'), 'utf-8'));
    }
    else{
        res.end(fs.readFileSync(path.join(__dirname, '/templates/error.html'), 'utf-8'));
    }
})

server.listen(port, hostname, ()=>{
    console.log(`Server is listening at: http://${hostname}:${port}`);
})