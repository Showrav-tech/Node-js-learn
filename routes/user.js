const express = require("express");

const router=express.Router();

router.get('/', async(req, res) => {
    const allDbUsers=await User.find({});
    const html = `
    <ul>
        ${users.map((user) => `<li>${user.firstName}-{user.email} </li>`).join("")}
    </ul>
    `;
    res.send(html);
});

// Fetch all users as JSON
router.get("/", (req, res) => {
    return res.json(users);
});

router.route("/:id")
    .get(async(req, res) => {
     const user=await User.findById(req.params.id);
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
router.post("/",async(req,res)=>{

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

   const result =await User.create({
    firstName:body.first_name,
    lastName:body.last_name,
    email:body.email,
    gender:body.gender,
    jobTitle:body.job_title,
   });
   return res.status(201).json({msg:"succes"});
});

module.export=router;