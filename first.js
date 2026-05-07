const http = require("http");
const fs = require("fs");

const myServer = http.createServer((req, res) => {
  const log = `${Date.now()}: New Req Received\n`;

  fs.appendFile("log.txt", log, (err,data) => {
  switch(req.url){
    case'/':res.end("HomePage");
    break
    case'/about':res.end("I am Piyush Garg");
    break

  }
  });

  res.end("Hello From server");
});

myServer.listen(8000, () => console.log("Server Started!"));