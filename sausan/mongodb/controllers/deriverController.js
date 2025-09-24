
import deriverModel from '../models/deriverModel.js'

const GetDeriver = async (req,res)=>{
const derive =  await deriverModel.find()
res.json({meg:derive}) 
} 


const AddDeriver =async (req,res)=>{
    const bus = await new deriverModel(req.body)
    await bus.save();
    res.json({mes:"inserted"})
}


const updateDeriver =  async (req,res)=>{
    await deriverModel.findByIdAndUpdate(req.params.id,req.body)
   res.json({msg:"updated"})
}


const deleteDeriver = async (req,res)=>{
   await deriverModel.findByIdAndDelete(req.params.id)
   res.json({msg:"delete"})
}


export {GetDeriver,AddDeriver,updateDeriver,deleteDeriver}