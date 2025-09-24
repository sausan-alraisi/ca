import express from 'express';
import {GetBuss,AddBus,updateBus,deleteBus} from '../controllers/busController.js'

const router = express.Router();

router.get("/",GetBuss)
router.post("/",AddBus)
router.put("/:id",updateBus)
router.delete("/:id",deleteBus)


export default router



