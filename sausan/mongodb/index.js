import express from 'express';
import cors from 'cors';
import busRouter from './routes/busRouter.js'
import deriverRouter from './routes/deriverRouter.js'
import tripRouter from './routes/tripRouter.js'

const app = express();
app.use(express.json());
app.use(cors());


app.use('/bus', busRouter);
app.use('/deriver', deriverRouter);
app.use('/trip', tripRouter);

app.listen(3000,()=>{
     console.log("Server is running on port 2000" +"http://localhost:3000/deriver");
})

