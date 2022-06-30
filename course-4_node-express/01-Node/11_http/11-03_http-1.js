const http = require('http');
const fs = require('fs');
const path = require('path');

const home = fs.readFileSync(path.join(__dirname, 'templates/index.html'), 'utf-8');
const css = fs.readFileSync(path.join(__dirname, 'templates/styles.css'), 'utf-8');
const js = fs.readFileSync(path.join(__dirname, 'templates/main.js'), 'utf-8');
const logo = fs.readFileSync(path.join(__dirname, 'templates/logo.svg'), 'utf-8');

const server = http.createServer((req, res) => {
    console.log(req.method);
    console.log(req.url);

    if (req.url === '/styles.css') {
        res.writeHead(200, { 'content-type': 'text/css' });
        res.write(css);
    }
    else if (req.url === '/main.js') {
        res.writeHead(200, { 'content-type': 'text/javascript' });
        res.write(js);
    }
    else if (req.url === '/logo.svg') {
        res.writeHead(200, { 'content-type': 'image/svg+xml' });
        res.write(logo);
    }
    else if (req.url === '/') {
        res.writeHead(200, { 'content-type': 'text/html' });
        res.write(home);
    }
    else if (req.url === '/about') {
        res.writeHead(200, { 'content-type': 'text/html' });
        res.write('<h1>ABOUT</h1>');
    }
    else {
        res.writeHead(404, { 'content-type': 'text/html' });
        res.write('<h1>Oops page not found</h1>');
    }
    res.end();
})

server.listen(port = 3000, hostname = '127.0.0.1', () => {
    console.log(`Server is listening at: http://${hostname}:${port}`);
})