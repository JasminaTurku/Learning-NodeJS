const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  console.log("!!!!!!!!!");
  console.log(req.url, req.method);
  if (req.url == "/" && req.method == "GET") {
    let rs = fs.createReadStream("index.html");
    rs.pipe(res);
  }
});

server.listen(3000, () => {
  console.log("Listening to port 3000");
});
