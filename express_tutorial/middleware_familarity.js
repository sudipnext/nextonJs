const express = require("express");
const app = express();

//req => middelware=> res
const logger =(req, res, next)=>{
  const method = req.method;
  const url = req.url;
  const time = new Date().getFullYear();
  console.log(method, url, time);
  // res.send("sending testing")
  next()
}
app.get("/", logger, (req, res) => {
  res.send("Home");
});
app.get("/about",logger, (req, res) => {
  res.send("About");
});

app.listen(5000, () => {
  console.log("server is listening on port 5000");
});
