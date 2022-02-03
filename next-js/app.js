const express = require('express')
const app = express();

app.get('/', (req, res)=>{
    res.status(401).send("Home")
})
app.get('/about', (req, res)=>{
    res.send("<h1>hello</h1>")
})

app.listen(5000, ()=>{
    console.log("Server is running at port 5000")
})