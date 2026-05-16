const http = require("http");
const fs = require("fs");
const url = require("url");
const express=require("express");


const app=express();
function myHandler(req,res){
 
}

const myserver = http.createServer=http.createServer(myHandler);
 

myserver.listen(8000, () => {
    console.log("Server Started Successfully!");
    console.log("Go to: http://localhost:8000");
});