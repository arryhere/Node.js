
const http = require('http');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 3000;


const home = fs.readFileSync('index.html', 'utf-8');
const about = fs.readFileSync('about.html', 'utf-8');
const contact = fs.readFileSync('contact.html', 'utf-8');
const services = fs.readFileSync('services.html', 'utf-8');


const server = http.createServer((req, res)=>{
    console.log(req.url);
    let url = req.url;
    console.log(url);

    res.statusCode = 200;
    res.setHeader('Content-type', 'text/html');

    if(url === '/'){
        res.end(home);
    }
    else if(url === '/about'){
        res.end(about);
    }
    else if(url === '/contact'){
        res.end(contact);
    }
    else if(url === '/services'){
        res.end(services);
    }
    else{
        res.statusCode = 404;
        res.end('<h1>Error: 404 page not found</h1>');
    }
})

server.listen(port, hostname, ()=>{
    console.log(`Server running at http://${hostname}:${port}/`);
})