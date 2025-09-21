import connection from "../db.js";
export let getCategories = (req,res)=>{
    connection.query("SELECT * FROM `categories`",(error,data)=>{
        if(error) return res.json({msg:"error"})
        res.json({msg:data})    
    })
}


export let addCategory = (req,resp)=>{
    let {name,description} = req.body
    connection.query("INSERT INTO `categories` (`name`,`description`) values (?,?)",[name,description],(error,res)=>{
        if(error) return resp.json({msg:"error"})
        resp.json({msg:"success"})
    })
}


export let deleteCategory = (req,resp)=>{
    let {id} = req.params;
    connection.query("DELETE FROM `categories` where id = ?",[id],(error,result)=>{
        if(error) return resp.json({msg:"not valid"})
        return resp.json({msg:"success"})    
    })
}


export let updateCategory = (req,resp)=>{
   let {id} = req.params;
   let {name,description}  = req.body

   connection.query("UPDATE `categories` SET `name` = ? , `description` = ?  where id = ?",[name,description,id],(error,result)=>{
        if(error) return resp.json({msg:"error"})
            return resp.json({msg:"success"})
   })
} 