import express from 'express'
import usermodel from './usermodel.js';

const route = express.Router();


route.get('/',(req,res)=>{
    let title = "hi mohamed"
    res.render("index",{title})
})

route.get("/add",(req,res)=>{
    res.render("add")
})

route.post("/add", async (req,res)=>{
   const user = await new usermodel(req.body)     
   await user.save()
   res.redirect("/add")
})

export default route