import db from '../config/db.js';

export default db.model("trips",{from:String,to:String,start:String,end:String,busId:String,driverId:String})

