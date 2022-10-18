const http = require("http");

//using event emitter api
const server = http.createServer((req, res) => {
    server.on('request', (req, res)=>{ //listening to it
        res.end("Welcome")
    })
});
server.listen(5000);
