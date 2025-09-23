import usersModel from '../Models/users.model.js'
import {validationResult} from 'express-validator'
export let getUsers = async (req,res)=>{
     let  users = await usersModel.findAll()
     res.json({msg:users})
}


export let addUser = async (req,resp)=>{
    let validation = validationResult(req)
    if(!validation.isEmpty()){
        return resp.json({error:validation.array()})
    }

    const user = await usersModel.create(req.body)
    resp.json({msg:"success"})
}


export let deleteUser = async (req,resp)=>{
    let {id} = req.params;
    await usersModel.destroy({
        where:{
            id:id
        }
    })
    return resp.json({msg:"success"})
}


export let updateUser = async (req,resp)=>{
   let  {id} = req.params;
    let validation = validationResult(req)
    if(!validation.isEmpty()){
        return resp.json({error:validation.array()})
    }
    const user = await usersModel.update(req.body,{
        where:{
            id:id
        }
    })
    return resp.json({msg:"success"})
} 