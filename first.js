const express = require("express");
const fs = require("fs"); 

const {connectMongoDb}=requir('./connection';)

const userRouter=requir("./routes/user");

const app =express();
const PORT = 8000;
//Connection Db

connectMongoDb("mongodb://127.0.0.1:27017/youtube-app-1");



app.use(express.urlencoded({ extended: false }));


app.use("/user",userRouter);


app.listen(PORT, () => console.log(`Server Started at PORT ${PORT}`));