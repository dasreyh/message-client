var app = require('http').createServer(response);
app.listen(3000);
console.log("Chat server starting…");
console.log("Chat server running");
function response(req, res) {
 res.writeHead(200);
 res.end("Server status: RUNNING");
}