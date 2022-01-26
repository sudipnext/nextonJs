const http = require("http");


const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to our home page");
  }
  if (req.url === "/about") {
    res.end("Here is our about page");
  }
  else{
  res.end(`
    <h1>OOPS !</h1>
    <p>The page is building currently you are looking for</p>
    <a href='/'>back home</a>
    `);
  }
});
server.listen(5000);
