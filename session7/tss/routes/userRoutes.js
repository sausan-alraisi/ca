import express from 'express';
import { getUsers, addUser, updateUser, deleteUser,loginUser } from '../controllers/userController.js';
import { createUserValidation, updateUserValidation,loginValidation  } from '../requests/userRequest.js';
import { authMiddleware } from '../middlewares/authMiddleware.js';

const router = express.Router();

router.get('/',authMiddleware, getUsers);
router.post('/', createUserValidation, addUser);
router.put('/:id',authMiddleware, updateUserValidation, updateUser);
router.delete('/:id',authMiddleware, deleteUser);
router.post('/login',authMiddleware, loginValidation, loginUser);

export default router;
