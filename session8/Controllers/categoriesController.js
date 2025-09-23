import categoriesModel from '../Models/categories.model.js'

export let getCategories = async (req,res)=>{
    let categories = await categoriesModel.findAll()
     res.json({msg:categories})
}


export let addCategory = async (req,resp)=>{
    await categoriesModel.create(req.body)
    resp.json({msg:"success"})
}


export let deleteCategory = async (req,resp)=>{
    let {id} = req.params;
    await categoriesModel.destroy({
        where:{
            id:id
        }
    })
    resp.json({msg:"deleted"})
}


export let updateCategory = async (req,resp)=>{
   let {id} = req.params;
    await categoriesModel.update(req.body,{
        where:{
            id:id
        }
    })
    resp.json({msg:"updated"})
} 