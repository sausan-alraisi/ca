import express from 'express'
import { getusers,addUser } from './userController.js';
let route = express.Router()

route.get("/users",getusers)

route.post("/users",addUser)


export default route;