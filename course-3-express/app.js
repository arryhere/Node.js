const express = require('express');
const fs = require('fs');

const app = express();
const port = 80;

app.get("/", (req, res)=>{
    res.status(200).send("This is my home page");
})
app.get("/about", (req, res)=>{
    res.send("This is my about page");
})
app.post("/about", (req, res)=>{
    res.send("This is my about page, post");
})


app.listen(port, ()=>{
    console.log(`Server running at port: ${port}`);
})