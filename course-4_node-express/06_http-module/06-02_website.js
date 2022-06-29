const http = require('http');
const fs = require('fs');
const path = require('path');

const port = 80;
const hostname = '127.0.0.1';

const server = http.createServer((req, res) => {
    console.log(req.url);

    if (req.url.match(/^(.*)(\/styles.css)$/gi)) {
        res.writeHead(200, { "Content-Type": "text/css" });
        res.write(fs.readFileSync(path.join(__dirname, '/templates/styles.css'), 'utf-8'));
    }
    else if (req.url === '/') {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(fs.readFileSync(path.join(__dirname, '/templates/index.html'), 'utf-8'));
    }
    else if (req.url === '/about') {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(fs.readFileSync(path.join(__dirname, '/templates/about.html'), 'utf-8'));
    }
    else if (req.url === '/contact') {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(fs.readFileSync(path.join(__dirname, '/templates/contact.html'), 'utf-8'));
    }
    else {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(fs.readFileSync(path.join(__dirname, '/templates/error.html'), 'utf-8'));
    }
    res.end();
})

server.listen(port, hostname, () => {
    console.log(`Server is listening at: http://${hostname}:${port}`);
})




/*
• Explore -

• https://stackoverflow.com/questions/28822034/simple-node-js-server-that-sends-htmlcss-as-response
• 
*/