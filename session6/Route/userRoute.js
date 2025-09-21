import express from 'express'
import { getUsers,addUser,deleteUser,updateUser } from '../Controllers/userController.js';
let userRoute = express.Router()

userRoute.get("/users",getUsers)

userRoute.post("/users",addUser)

userRoute.delete("/users/:id",deleteUser)

userRoute.put("/users/:id",updateUser)


export default userRoute;