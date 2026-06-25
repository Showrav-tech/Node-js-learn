const fs=requir("fs");

function logReqRes(filename){
    return(req,res,next)=>{
        fs.appendFile("log.txt", `\n${Date.now()}:${req.method}:${req.path}`, (err) => {
                next();
            }
        );
    };
}