const express = require('express');

const app = express();

// req -> middleware -> res

const _log = (req, res, next) => {
    console.log(req.method, req.url, new Date().getFullYear());
    res.send('Middleware')
}

app.get('/', _log, (req, res) => {
    res.send('home')
})
app.get('/about',_log, (req, res) => {
    res.send('about')
})



app.listen(port = 3000, hostname = '127.0.0.1', () => { console.log(`Server is lintening at: http://${hostname}:${port}`); })