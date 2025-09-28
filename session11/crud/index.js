import express from 'express'
import cors from 'cors'
import route from './route.js'
import methodOverride from 'method-override'
import path from 'path'
const app = express()


app.use(cors())
app.use(express.urlencoded({extended:true}))
app.use(express.static(path.join(process.cwd(),"public")))
app.set("view engine","ejs")
app.use(methodOverride("_method"))
app.use("/",route)

app.listen(3000,()=>{console.log("server run")})