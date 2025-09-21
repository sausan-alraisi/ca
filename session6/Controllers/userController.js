import connection from "../db.js";
export let getUsers = (req,res)=>{
    connection.query("SELECT * FROM `users`",(error,data)=>{
        if(error) return res.json({msg:"error"})
        res.json({msg:data})    
    })
}


export let addUser = (req,resp)=>{
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
   let {id} = req.params;
   let {name,email,password}  = req.body

   connection.query("UPDATE `users` SET `name` = ? , `email` = ? , password = ? where id = ?",[name,email,password,id],(error,result)=>{
        if(error) return resp.json({msg:"error"})
            return resp.json({msg:"success"})
   })
} 