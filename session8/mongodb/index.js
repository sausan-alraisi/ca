import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
const app = express()

mongoose.connect("mongodb://localhost:27017/oman")
const usersModel =  mongoose.model("users",{name:String,email:String,password:String})

app.use(cors())
app.use(express.json())

const router =  express.Router()


router.get("/", async (req,res)=>{
   const users =  await usersModel.find()
   res.json({msg:users})
})


app.use(router)

app.listen(4000,()=>{console.log("server run port 4000")})