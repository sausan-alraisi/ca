import express from 'express'
import usermodel from './usermodel.js';

const route = express.Router();


route.get('/', async (req,res)=>{
   const users = await usermodel.find()
    res.render("index",{users})
})

route.get("/add",(req,res)=>{
    res.render("add")
})

route.post("/add", async (req,res)=>{
   const user = await new usermodel(req.body)     
   await user.save()
   res.redirect("/")
})


route.delete("/delete/:id", async (req,res)=>{
    const {id} =  req.params
   await  usermodel.findByIdAndDelete(id) 
   res.redirect("/")
})


route.get("/edit/:id", async (req,res)=>{
    const {id} =  req.params
    const user = await usermodel.findById(id)
    res.render("edit",{user})
   
})


route.put("/update/:id", async (req,res)=>{
    const {id} =  req.params
   await  usermodel.findByIdAndUpdate(id,req.body) 
   res.redirect("/")
})


export default route