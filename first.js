
const fs=require('fs');

fs.readFile('./files/chak.txt',(err,data)=>{
if(err) throw err;
console.log(data.toString());

})
fs.writeFile(path.join(__dirname,'files','reply.text'),(err)=>{

})