const http = require("http");
const fs = require("fs");

const PORT = 3000;

const server = http.createServer((req, res) => {
  fs.readFile("index.html", (err, data) => {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(data);
  });
});

server.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});
