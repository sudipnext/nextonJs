const express = require('express');
const path = require('path');
const app = express();

// setting up static and middleware
app.use(express.static('./public'))


// app.get('/', (req, res)=>{
//     res.sendFile(path.resolve(__dirname, './navbar-app/index.html'))
// we don't have to use this cause this is same for all the persons who visits this page instead i will throw everything on the public 
//by copying the index in the public it will default select the index.html and we are good to go 
//})
app.all('*', (req, res)=>{
    res.status(404).send('resource not found bla bla bla')
})
app.listen(5000, ()=>{
    console.log('Sever is listening at the port 5000');
})