import express from 'express'
import cors from 'cors'
import {addUsers,deleteUsers,getUsers,updateUsers} from './controllers/userController.js'
const app = express()


app.use(cors())
app.use(express.json())

const router =  express.Router()


router.get("/",getUsers)


router.post("/",addUsers)


router.put("/:id",updateUsers)


router.delete("/:id",deleteUsers)


app.use(router)

app.listen(4000,()=>{console.log("server run port 4000")})