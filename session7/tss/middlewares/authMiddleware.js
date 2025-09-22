import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import db from '../models/index.js';

dotenv.config();

const User = db.User;

export const authMiddleware = async (req, res, next) => {
  const authHeader = req.headers['authorization'];

  if (!authHeader) return res.status(401).json({ error: 'No token provided' });

  // التوقع: "Bearer <token>"
  const token = authHeader.split(' ')[1];
  if (!token) return res.status(401).json({ error: 'Invalid token format' });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    
    // جلب بيانات المستخدم من DB
    const user = await User.findByPk(decoded.id);
    if (!user) return res.status(401).json({ error: 'User not found' });

    req.user = user; // نخزن المستخدم في req عشان الـcontrollers تستخدمه
    next();
  } catch (err) {
    return res.status(401).json({ error: 'Unauthorized' });
  }
};
