const http=require('node:http');
http.createServer((request,response)=>{
    const{headers,methods,url}=request;
    let body=[];
    request.on('error',err=>{
        console.error(err);
    })
    .on('data',chunk=>{
        body.push(chunk);
    })
    .on('end',()=>{
body = Buffer.concat(body).toString();
response.on(`error`,err=>{
    console.error(err);
});
response.statusCode=200;
response.setHeader('Content-type','application/json');
const responseBody = { headers, method, url, body };
    })
})
