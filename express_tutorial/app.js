const express = require('express');
const path = require('path');
const app = express();

// setting up static and middleware
app.use(express.static('./public'))


app.get('/', (req, res)=>{
    res.sendFile(path.resolve(__dirname, './navbar-app/index.html'))
})
app.all('*', (req, res)=>{
    res.status(404).send('resource not found bla bla bla')
})
app.listen(5000, ()=>{
    console.log('Sever is listening at the port 5000');
})