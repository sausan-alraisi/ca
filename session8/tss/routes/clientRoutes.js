import express from 'express';
import { getClients, addClient, updateClient, deleteClient } from '../controllers/clientController.js';
import { createClientValidation, updateClientValidation } from '../requests/clientRequest.js';
import { authMiddleware } from '../middlewares/authMiddleware.js';

const router = express.Router();

router.use(authMiddleware);

router.get('/', getClients);
router.post('/', createClientValidation, addClient);
router.put('/:id', updateClientValidation, updateClient);
router.delete('/:id', deleteClient);

export default router;
