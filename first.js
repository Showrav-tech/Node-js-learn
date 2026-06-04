const express =require("express");
const users=require("./MOCK_DATA.json");
const app=express();
const PORT=8000;

//Middleware-plugin
app.use(express.urlencoded({extended:false}));

app.use((req,res,next)=>{
    console.log('Hello from Middleware 1');
    next();
});
app.use((req,res,next)=>{
    console.log('Hello from Middleware 2');
    next();
})


app.listen(PORT,()=> console.log(`Server Started at port :${PORT}`))
app.get("/api/user",(req,res)=>{
    return res.json(users);
});
app.get('/users', (req, res) => {
    const html = `
    <ul>
        ${users.map((user)=>`<li>${user.first_name}</li>`).join("")}
    </ul>
    `;
    res.send(html);
});

//REST API
app.get("/api/user/",(req,res)=>{
    return res.json(users);
});

app.route("/api/users/:id").get("/api/users/:id",(req,res)=>{
const id=Number(req.params.id);
const user=users.find((user)=>user.id===id);
return res.json(user);
}).put((req,res)=>{
    res.json({status:"Pending"});
})

app.post('/api/users',(req,res)=>{
return res.json({status:"Pending"});
}).delete((res,req)=>{
    return res.json({status:"Pending"});
});

app.post("/api/users",(req,res)=>{
    return res.json({status:"pending"});
});

app.listen(PORT,()=>console.log(`Server Started at PORT 8000`));