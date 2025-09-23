
import usersModel from '../models/userModel.js'
const getUsers = async (req,res)=>{
   const users =  await usersModel.find()
   res.json({msg:users})
}


const addUsers =  async (req,res)=>{
    const user = await new usersModel(req.body)
    await user.save();
    
   res.json({msg:"inserted"})
}


const updateUsers =  async (req,res)=>{
    console.log(req.params.id)
    await usersModel.findByIdAndUpdate(req.params.id,req.body)
   res.json({msg:"updated"})
}


const deleteUsers = async (req,res)=>{
   await usersModel.findByIdAndDelete(req.params.id)
   res.json({msg:"delete"})
}


export {getUsers,updateUsers,addUsers,deleteUsers}