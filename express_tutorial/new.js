const http = require("http");
const {readFileSync} = require('fs');

//get all files
const homePage = readFileSync('./index.html')
const server = http.createServer((req, res) => {
  const url = req.url;
  //homepage
  if (url === "/") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write(homePage);
    res.end();
  }
  //about page
  else if (url === "/about") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write("<h1>ABOUT PAGE</h1>");
    res.end();
  }
  //404
  else {
    res.writeHead(404, { "content-type": "text/html" });

    res.write("<h1>PAGE NOT FOUND!</h1>");
    res.end();
  }
});
server.listen(5000);
