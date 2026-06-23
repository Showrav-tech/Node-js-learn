const express = require("express");
const fs = require("fs"); 
const mongoose=require("mongoose");
const users = require("./MOCK_DATA.json");

const app =express();
const PORT = 8000;
//Connection Db

mongoose.connect(' mongodb://127.0.0.1:27017/youtube-app-1')
.then(()=>console.log("MongoDB connected"));

//Schema
const userSchema=new mongoose.Schema({
firstName:{
    type :String,
    required:true,
},
lastName:{
    type:String,

},
email:{
    type:String,
    required:true,
    unique:true,
},
jobTitle:{
    type:String,
},gender:{
    type:String,
}
});
const User=mongoose.model("user",userSchema);

app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
    fs.appendFile("log.txt", `\n${Date.now()}:${req.method}:${req.path}`, (err) => {
        next();
    });
});



// Render user list as HTML
app.get('/users', (req, res) => {
    const html = `
    <ul>
        ${users.map((user) => `<li>${user.first_name}</li>`).join("")}
    </ul>
    `;
    res.send(html);
});

// Fetch all users as JSON
app.get("/api/users", (req, res) => {
    return res.json(users);
});

app.route("/api/users/:id")
    .get((req, res) => {
        const id = Number(req.params.id);
        const user = users.find((user) => user.id === id);
        if (!user) return res.status(404).json({ error: "User not found" });
        return res.json(user);
    })
    .put((req, res) => {
        return res.json({ status: "Pending" });
    })
    .delete((req, res) => {
        return res.json({ status: "Pending" });
    });

// Validate data and create a new user record
app.post("/api/users",(req,res)=>{

    const body=req.body;

    if(

    !body ||
    !body.first_name||
     !body.last_name||
      !body.email||
    !body.gender||
    !body.job_title

    ){
     return res.status(400).json({msg:"All fields are req....."});
    }

    users.push({...body,id:users.length+1});

    fs.writeFile("./MOCK_DATA.json",JSON.stringify(user),(err,data)=>{

        return res.status(201).json({status:"succes",id:users.length});

    });

});

app.listen(PORT, () => console.log(`Server Started at PORT ${PORT}`));