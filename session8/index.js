import express from 'express'
import cors from 'cors'
import categoryRoute from './Route/categoryRoute.js'
import userRoute from './Route/userRoute.js' 
const app = express()


app.use(express.json())
app.use(cors())

app.use("/api/v1",userRoute)
app.use("/api/v1",categoryRoute)


app.listen(3000,()=>{console.log('server run')})