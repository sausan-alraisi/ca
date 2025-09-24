import express from 'express';
import {GetTrip,AddTrip,updateTrip,deleteTrip} from '../controllers/tripController.js'

const router = express.Router();

router.get("/",GetTrip)
router.post("/",AddTrip)
router.put("/:id",updateTrip)
router.delete("/:id",deleteTrip)


export default router



