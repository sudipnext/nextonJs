const express = require('express')
const app = express()
//another way
// const app = require('express')();


//app.get
app.get('/', (req, res)=>{
    console.log("user hit the resource")
    res.status(200).send('HOME PAGE')
})
app.get('/about', (req, res)=>{
    // console.log("user hit the about page")
    res.status(200).send("About page")

})

//app.all
app.all('*', (req, res)=>{
    res.status(404).end("<h1>NOT FOUND!</h1>")
})



//app.post
//app.put
//app.delete

//app.use -- middleware
//app.listen
app.listen(5000, ()=>{
    console.log("Sever is listening on port 5000")
})