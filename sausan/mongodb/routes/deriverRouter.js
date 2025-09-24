import express from 'express';
import {GetDeriver,AddDeriver,updateDeriver,deleteDeriver} from '../controllers/deriverController.js'

const router = express.Router();

router.get("/",GetDeriver)
router.post("/",AddDeriver)
router.put("/:id",updateDeriver)
router.delete("/:id",deleteDeriver)


export default router



