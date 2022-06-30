const http = require('http');
const fs = require('fs');
const path = require('path');

const port = 3000;
const hostname = '127.0.0.1';

const css = fs.readFileSync(path.join(__dirname, '/templates/styles.css'), 'utf-8')
const home = fs.readFileSync(path.join(__dirname, '/templates/index.html'), 'utf-8')
const about = fs.readFileSync(path.join(__dirname, '/templates/about.html'), 'utf-8')
const contact = fs.readFileSync(path.join(__dirname, '/templates/contact.html'), 'utf-8')
const error = fs.readFileSync(path.join(__dirname, '/templates/error.html'), 'utf-8')


const server = http.createServer((req, res) => {
    console.log(req.url);

    if (req.url.match(/^(.*)(\/styles.css)$/gi)) {
        res.writeHead(200, { "Content-Type": "text/css" });
        res.write(css);
    }
    else if (req.url === '/') {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(home);
    }
    else if (req.url === '/about') {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(about);
    }
    else if (req.url === '/contact') {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(contact);
    }
    else {
        res.writeHead(404, { "Content-Type": "text/html" });
        res.write(error);
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