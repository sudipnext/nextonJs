const http = require('http')

const server = http.createServer((req, res)=>{
    const { url } = req;
    console.log("I received !");
    if(url == '/'){
    res.writeHead(200, { 'Content-Type': 'text/html'})
        res.write("<h1>HOMEPAGE</h1>");
    }else if(url === '/admin'){
    res.writeHead(200, { 'Content-Type': 'text/html'})

        res.write("<h1>ADMINPAGE</h1>")
    }else{
    res.writeHead(404, { 'Content-Type': 'text/html'})

        res.write("<h1>404 not found!</h1>")
    }
    res.end()
})
server.listen(3000, ()=>{
    console.log("Server is listening at port 3000")
});