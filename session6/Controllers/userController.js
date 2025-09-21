// import connection from "../db.js";
import usersModel from '../Models/users.model.js'
import {validationResult} from 'express-validator'
export let getUsers = async (req,res)=>{
     let  users = await usersModel.findAll()
     res.json({msg:users})
}


export let addUser = (req,resp)=>{
    let validation = validationResult(req)
    if(!validation.isEmpty()){
        return resp.json({error:validation.array()})
    }
    let {name,email,password} = req.body
    connection.query("INSERT INTO `users` (`name`,`email`,`password`) values (?,?,?)",[name,email,password],(error,res)=>{
        if(error) return resp.json({msg:"error"})
        resp.json({msg:"success"})
    })
}


export let deleteUser = (req,resp)=>{
    let {id} = req.params;
    connection.query("DELETE FROM `users` where id = ?",[id],(error,result)=>{
        if(error) return resp.json({msg:"not valid"})
        return resp.json({msg:"success"})    
    })
}


export let updateUser = (req,resp)=>{
   let  {id} = req.params;
   let {name,email,password}  = req.body
    let validation = validationResult(req)
    if(!validation.isEmpty()){
        return resp.json({error:validation.array()})
    }
   connection.query("UPDATE `users` SET `name` = ? , `email` = ? , password = ? where id = ?",[name,email,password,id],(error,result)=>{
        if(error) return resp.json({msg:"error"})
            return resp.json({msg:"success"})
   })
} 