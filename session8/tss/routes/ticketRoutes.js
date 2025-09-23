import express from 'express';
import { getTickets, addTicket, updateTicket, deleteTicket } from '../controllers/ticketController.js';
import { createTicketValidation, updateTicketValidation } from '../requests/ticketRequest.js';
import upload from '../middlewares/upload.js';
import { authMiddleware } from '../middlewares/authMiddleware.js';

const router = express.Router();
router.use(authMiddleware);

router.get('/', getTickets);
router.post('/', upload.single('attachment'), createTicketValidation, addTicket);
router.put('/:id', upload.single('attachment'), updateTicketValidation, updateTicket);
router.delete('/:id', deleteTicket);

export default router;
