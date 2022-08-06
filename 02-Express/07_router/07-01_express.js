const express = require('express');
const path = require('path');
const PeopleRoute = require('./routes/PeopleRoute');
const AuthRoute = require('./routes/AuthRoute');

const app = express()

app.use(express.static(path.join(__dirname, '/public')))
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.use('/api/people', PeopleRoute);
app.use('/login', AuthRoute);

app.listen(port = 3000, hostname = '127.0.0.1', () => { console.log(`Server is lintening at: http://${hostname}:${port}`); })