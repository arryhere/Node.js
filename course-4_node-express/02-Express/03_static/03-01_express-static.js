const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();

app.use( express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
        console.log(req.url);
    res.status(200).sendFile(path.join(__dirname, 'templates/index.html'));
})
app.get('/about', (req, res) => {
        console.log(req.url);
    res.status(200).sendFile(path.join(__dirname, 'templates/about.html'));
})
app.get('/projects', (req, res) => {
        console.log(req.url);
    res.status(200).sendFile(path.join(__dirname, 'templates/projects.html'));
})
app.get('/contact', (req, res) => {
        console.log(req.url);
    res.status(200).sendFile(path.join(__dirname, 'templates/contact.html'));
})
app.all('*', (req, res) => {
    console.log(req.url);
    res.status(404).sendFile(path.join(__dirname, 'templates/error.html'));
})


app.listen(port = 3000, hostname = '127.0.0.1', () => { console.log(`Server is lintening at: http://${hostname}:${port}`); })