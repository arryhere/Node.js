const express = require('express');

const app = express();

/*
• app.get
• app.post
• app.put
• app.delete
• app.all
• app.use
• app.listen
•
*/

app.get('/', (req, res) => {
    res.send('<h1>Home</h1>');
})
app.get('/about', (req, res) => {
    res.status(200).send('<h1>About</h1>');
})
app.all('*', (req, res) => {
    res.status(404).send('<h1>Error</h1>');
})
// app.disable('etag');         // prevent caching | ctrl + f5

app.listen(port = 80, hostname = '127.0.0.1', () => { console.log(`Server is lintening at: http://${hostname}:${port}`); })