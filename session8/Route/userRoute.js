import express from 'express'
import { getUsers,addUser,deleteUser,updateUser } from '../Controllers/userController.js';
import {addNewUserRequest,updateUserRequest} from '../Request/userRequest.js'
let userRoute = express.Router()

userRoute.get("/users",getUsers)

userRoute.post("/users",addNewUserRequest,addUser)

userRoute.delete("/users/:id",updateUserRequest,deleteUser)

userRoute.put("/users/:id",updateUserRequest,updateUser)


export default userRoute;