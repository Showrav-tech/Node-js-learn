const http = require("http");
const fs = require("fs");

const myServer = http.createServer((req, res) => {
  const log = `${Date.now()}: New Req Received\n`;

  fs.appendFile("log.txt", log, (err) => {
    if (err) {
      console.log("Error writing file:", err);
    }
  });

  res.end("Hello From server");
});

myServer.listen(8000, () => console.log("Server Started!"));