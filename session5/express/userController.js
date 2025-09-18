import connection from "./db.js";
export let getusers = (req,res)=>{
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