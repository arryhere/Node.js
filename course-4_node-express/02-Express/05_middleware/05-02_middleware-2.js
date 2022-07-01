const express = require('express');
const _log = require('./public/_log');

const app = express();

// app.use(_log)
// app.use('/api',_log)

app.get('/', (req, res) => {
    res.send('home')
})
app.get('/about', (req, res) => {
    res.send('about')
})
app.get('/api/v1', (req, res) => {
    res.send('api/v1')
})
app.get('/api/items/search', (req, res) => {
    res.send('api/items/search')
})



app.listen(port = 3000, hostname = '127.0.0.1', () => { console.log(`Server is lintening at: http://${hostname}:${port}`); })