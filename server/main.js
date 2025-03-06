const http = require("http");

const server = http.createServer(function (req, res) {
  res.setHeader("Content-Type", "text/html");
  res.end(`<h1>Hello from node</h1>
    <p>Samo obican tekst</p>`);
});

server.listen(1337, function () {
  console.log("Listening to port 1337");
});
