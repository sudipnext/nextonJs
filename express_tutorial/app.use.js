const express = require("express");
const morgan = require('morgan')
const app = express();
const logger = require('./logger')
const authorize = require('./authorize')

//req => middelware=> res
// app.use('/api',logger) //order matters  //it works with only specific routes like it wil come after anything come after api
// app.use([logger, authorize]) //which comes first will works first
// app.user(express.static('./public'))
app.use(morgan('tiny')) //third party middleware
app.get("/", (req, res) => {
  res.send("Home");
});
app.get("/about", (req, res) => {
  res.send("About");
});
app.get("/api/products", (req, res) => {
  res.send("products");
});
app.get("/api/items", (req, res) => {
  console.log(req.user)
  res.send("items");
});
app.listen(5000, () => {
  console.log("server is listening on port 5000");
});
