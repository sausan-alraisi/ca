import tripModel from '../models/tripModel.js'


const GetTrip = async (req,res)=>{
const trip =  await tripModel.find()
res.json({meg:trip}) 
} 


const AddTrip =async (req,res)=>{
    const bus = await new tripModel(req.body)
    await bus.save();
    res.json({mes:"inserted"})
}


const updateTrip =  async (req,res)=>{
    await tripModel.findByIdAndUpdate(req.params.id,req.body)
   res.json({msg:"updated"})
}


const deleteTrip = async (req,res)=>{
   await tripModel.findByIdAndDelete(req.params.id)
   res.json({msg:"delete"})
}


export {GetTrip,AddTrip,updateTrip,deleteTrip}