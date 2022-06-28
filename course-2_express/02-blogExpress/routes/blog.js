const express = require('express');
const path = require('path');
const router = express.Router();
const blogs = require('../data/blogs')

router.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname, '../templates/index.html'));
    res.render('home');
})

router.get('/blog', (req, res)=>{
    // blogs.forEach((e) => {
    //     console.log(e.title);
    // });
    res.sendFile(path.join(__dirname, '../templates/bloghome.html'));
})

router.get('/blogpost/:slug', (req, res)=>{
    let myBlog = blogs.filter((e)=>{            // will return array containing the object
        return e.slug === req.params.slug;
    })
    console.log(myBlog);
    res.sendFile(path.join(__dirname, '../templates/blogpage.html'))
})

module.exports = router;