
import busModel from '../models/busModel.js'

const GetBuss = async (req,res)=>{
const buss =  await busModel.find()
res.json({meg:buss}) 
} 


const AddBus =async (req,res)=>{
    const bus = await new busModel(req.body)
    await bus.save();
    res.json({mes:"inserted"})
}


const updateBus =  async (req,res)=>{
    await busModel.findByIdAndUpdate(req.params.id,req.body)
   res.json({msg:"updated"})
}


const deleteBus = async (req,res)=>{
   await busModel.findByIdAndDelete(req.params.id)
   res.json({msg:"delete"})
}


export {GetBuss,AddBus,updateBus,deleteBus}