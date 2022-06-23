const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const port = 80;

// serving static files
app.use('/static', express.static('static'));

// set template engine
app.set('view engine', 'pug');

// set the views directory
app.set('views', path.join(__dirname, 'views'));

// pug endpoint
app.get("/demo", (req, res) => {
    res.status(200).render('demo', { title: 'Hey', message: 'Hello there! mah pug' });
})

app.get("/", (req, res) => {
    res.status(200).send("This is my home page");
})
app.get("/about", (req, res) => {
    res.send("This is my about page");
})
app.post("/about", (req, res) => {
    res.send("This is my about page, post");
})


app.listen(port, () => {
    console.log(`Server running at port: ${port}`);
})