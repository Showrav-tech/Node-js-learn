const http=require("http");
const fs = require("fs");
const url =require("url");

const myserver = http.createServer((req,res)=>{
  if(req.url==="/favicon.ico")return res.end();
  const log=`${Date.now()}: ${req.url}New Req Received\n`;
  const myUrl=url.parse(req.url,true);
  console.log(myUrl);
})