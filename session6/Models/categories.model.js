import db from "../db.js";
import { DataTypes } from "sequelize";

const categoriesModel =  db.define('categories',{
    name:{
        type:DataTypes.STRING
    },
    description:{
        type:DataTypes.STRING
    }
})

export default categoriesModel;