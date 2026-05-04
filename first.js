const http=require("http");
const myServer =http.createServer((req,res)=>{
  console.log(req.headers);
  res.end("Hello From server");
});

myServer.listen(8000,()=>console.log("Server Started!"));



