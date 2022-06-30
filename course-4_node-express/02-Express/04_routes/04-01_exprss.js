const express = require('express');
const data = require('./04-00_data');

const app = express();

app.get('/', (req, res) => {
    res.send(`  <h1>Home</h1>
                <a href="/api/people">people</a>
                <a href="/api/products">products</a>
                <a href="/api/v1/query1?name=foo&id=4&tag=green">query1</a>
                <a href="/api/v1/query2?search=a&limit=5">query2</a>
            `);
})

app.get('/api/people', (req, res) => {
    res.json(data.people);
})

app.get('/api/products', (req, res) => {
    const new_products = data.products.map((e, i, arr) => {
        return {
            id: e.id,
            name: e.name,
            image: e.image
        }
    })
    res.json(new_products);
})

app.get('/api/products/:id', (req, res) => {                // route parameters
    const product_1 = data.products.find((e, i, arr) => {
        return e.id === parseInt(req.params.id);
    })
    product_1 !== undefined ? res.json(product_1) : res.status(404).send('<h1>Oops Page not found</h1>')
})

app.get('/api/v1/query1', (req, res) => {                    // query parameters
    console.log(req.query);
    res.json(req.query)
})

app.get('/api/v1/query2', (req, res) => {
    const {search, limit} = req.query;
    console.log(search, limit);

    let sortedProduct = {data: "null"};

    if(String(search).match(/^([a-zA-Z])$/gi)){
        sortedProduct = data.products.filter((e,i,arr) => {
            return e.name.startsWith(search.toLowerCase())
        })
    }
    else if(String(limit).match(/^([1-9]+)$/gi)){
        sortedProduct = data.products.slice(0, parseInt(limit))
    }
    
    sortedProduct.data !== "null" ? res.status(200).json(sortedProduct) : res.status(404).json(sortedProduct)
})

app.listen(port = 3000, hostname = '127.0.0.1', () => { console.log(`Server is lintening at: http://${hostname}:${port}`); })



/*
• Resource -

• https://hn.algolia.com/api
• 
*/