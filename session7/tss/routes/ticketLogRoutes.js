import express from 'express';
import { getTicketLogs, addTicketLog, updateTicketLog, deleteTicketLog } from '../controllers/ticketLogController.js';
import { createTicketLogValidation, updateTicketLogValidation } from '../requests/ticketLogRequest.js';
import { authMiddleware } from '../middlewares/authMiddleware.js';

const router = express.Router();
router.use(authMiddleware);

router.get('/', getTicketLogs);
router.post('/', createTicketLogValidation, addTicketLog);
router.put('/:id', updateTicketLogValidation, updateTicketLog);
router.delete('/:id', deleteTicketLog);

export default router;
