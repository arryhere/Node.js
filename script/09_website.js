const http = require('http');
const fs = require('fs');

const  port = process.env.PORT || 3000;

const server = http.createServer((req, res)=>{
    if(req.url === '/'){
        res.statusCode = 200;
        res.end('<h1>This is a heading</h1><p>This is a smol paragraph :)</p>');
        
    }
    else if(req.url === '/about'){
        res.statusCode = 200;
        res.end('<h1>This is a NEW heading</h1><p>This is a NEW smol paragraph :)</p>');
        
    }
    else if(req.url === '/hello'){
        res.statusCode = 200;
        const data = fs.readFileSync('index.html');
        res.end(data);
        
    }
    else {
        res.statusCode = 404;
        res.end('<p>Page not found</p>');
    }
});

server.listen(port, ()=>{
    console.log(`Server is listening on port: ${port}`);
});