const express = require('express')
const path = require('path')

const app = express()

// To create a virtual path prefix (where the path does not actually exist in the file system) 
// for files that are served by the express.static function, 
// specify a mount path for the static directory,
app.use('/static', express.static(path.join(__dirname, '/public')))

// set thhe template engine as pug
app.set('view engine', 'pug')
// set the views directory
app.set('views', path.join(__dirname, '/views'))
// demo
app.get('/pug', (req, res) => {
    res.render('demo', { title: 'Hey', message: 'Hello there!' })
})


// endpoints
app.get('/', (req, res) => {
    res.status(200).render('index.pug', {
        'title': 'PUG TITLE',
        'content': 'PUG CONTENT :)'
    })
})

app.listen(port = 3000, hostname = '127.0.0.1', () => {
    console.log(`Server is listening at port: http://${hostname}:${port}`);
})