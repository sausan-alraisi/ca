import mongoose from "mongoose";

mongoose.connect("mongodb://localhost:27017/oman")
export default mongoose.model("users",{name:String,email:String,password:String})
