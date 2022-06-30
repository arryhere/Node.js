const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();

app.get('/', (req, res) => {
    res.status(200).sendFile(path.join(__dirname, 'templates/index.html'));
})
app.get('/about', (req, res) => {
    res.status(200).sendFile(path.join(__dirname, 'templates/about.html'));
})
app.get('/projects', (req, res) => {
    res.status(200).sendFile(path.join(__dirname, 'templates/projects.html'));
})
app.get('/contact', (req, res) => {
    res.status(200).sendFile(path.join(__dirname, 'templates/contact.html'));
})
app.get('*/styles.css', (req, res) => {
    res.status(200).sendFile(path.join(__dirname, 'templates/styles.css'));
})
app.get('*/main.js', (req, res) => {
    res.status(200).sendFile(path.join(__dirname, 'templates/main.js'));
})
app.get('*/logo.svg', (req, res) => {
    res.status(200).sendFile(path.join(__dirname, 'templates/logo.svg'));
})
app.all('*', (req, res) => {
    res.status(404).sendFile(path.join(__dirname, 'templates/error.html'));
})


app.listen(port = 3000, hostname = '127.0.0.1', () => { console.log(`Server is lintening at: http://${hostname}:${port}`); })