import db from "../db.js";
import { DataTypes } from "sequelize";

const usersModel =  db.define('users',{
    name:{
        type:DataTypes.STRING
    },
    email:{
        type:DataTypes.STRING
    },
    password:{
        type:DataTypes.STRING
    }
})

export default usersModel;