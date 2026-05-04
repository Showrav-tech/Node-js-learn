const http=require("http");
const myServer =http.createServer((req,res)=>{
  console.loge("New req Rec.");
  res.end("Hello From server");
});




