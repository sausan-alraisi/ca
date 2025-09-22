import categoriesModel from '../Models/categories.model.js'
export let getCategories = async (req,res)=>{
    let categories = await categoriesModel.findAll()
     res.json({msg:categories})
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