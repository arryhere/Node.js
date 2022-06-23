const express = require('express');
const path = require('path');

const app = express();
const port = 4001;

// const middleWare = (req, res, next)=>{
//     console.log(req);
//     next();
// }
// app.use(express.static(path.join(__dirname, 'public')));
// app.use(middleWare);

app.get('/', (req, res) => {
    //   res.send('home');
    res.status(200).sendFile(path.join(__dirname, 'website/index.html'));
})
app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'website/about.html'));
    res.status(404);
})
app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, 'website/contact.html'));
})
app.get('/services', (req, res) => {
    res.sendFile(path.join(__dirname, 'website/services.html'));
})
app.get('/json', (req, res) => {
    // res.sendFile(path.join(__dirname, 'website/index.json'));
    res.json({
        "name": "Arijit Das",
        "age": 22
    })
})
app.get('/hello/:name', (req, res) => {
    res.send('Hello World ' + req.params.name);
})


app.listen(port, () => {
    console.log(`Server listening on port http://localhost:${port}`);
})