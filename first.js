const http = require("http");
const fs = require("fs");
const url = require("url");

function myHandler(req,res){
     if (req.url === "/favicon.ico") return res.end();

    const log = `${Date.now()}: ${req.method} ${req.url} New Req Received\n`;
    const myUrl = url.parse(req.url, true);
    console.log(myUrl);
    fs.appendFile("log.text", log, (err) => {
        if (err) {
            console.error("Log error:", err);
        }
        switch (myUrl.pathname) {
         case "/":
          res.end("Home Page");
     break;
            case "/about":
         const username = myUrl.query.myname;
                if (username) {
                    res.end(`Hi, ${username}`);
            } else {
                    res.end("Hi, Guest");
                }
                break;

            default:
                res.end("404 Not Found");
        }
    });
}

const myserver = http.createServer=http.createServer(myHandler);
 

myserver.listen(8000, () => {
    console.log("Server Started Successfully!");
    console.log("Go to: http://localhost:8000");
});