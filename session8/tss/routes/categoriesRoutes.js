import express from 'express';
import { getCategories, addCategories, updateCategories, deleteCategories } from '../controllers/categoriesController.js';
import { authMiddleware } from '../middlewares/authMiddleware.js';

const router = express.Router();

router.use(authMiddleware);

router.get('/', getCategories);
router.post('/', addCategories);
router.put('/:id', updateCategories);
router.delete('/:id', deleteCategories);

export default router;
