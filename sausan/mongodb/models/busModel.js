import db from '../config/db.js';

export default db.model("bus",{type:String,busId:String,ExprData:String,NoOfSet:String})
