import express from 'express'
import {addCategory,deleteCategory,getCategories,updateCategory } from '../Controllers/categoriesController.js';
let categoryRoute = express.Router()

categoryRoute.get("/categories",getCategories)

categoryRoute.post("/categories",addCategory)

categoryRoute.delete("/categories/:id",deleteCategory)

categoryRoute.put("/categories/:id",updateCategory)


export default categoryRoute;