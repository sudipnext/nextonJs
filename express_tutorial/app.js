const express = require('express')
const app = express()
//another way
// const app = require('express')();

//app.listen
app.listen(5000, ()=>{
    console.log("Sever is listening on port 5000")
})
//app.get
//app.post
//app.put
//app.delete
//app.all
//app.