import db from '../models/index.js';
import { validationResult } from 'express-validator';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

const User = db.User;
dotenv.config();

export const getUsers = async (req, res) => {
  const users = await User.findAll();
  res.json({ msg: users });
};

export const addUser = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.json({ error: errors.array() });

    const hashedPassword = await bcrypt.hash(req.body.password, 10);


  const user = await User.create({
    name: req.body.name,
    email: req.body.email,
    password: hashedPassword,
    role: req.body.role || 'employee'
  });
  
  res.json({ msg: 'success', user });
};

export const deleteUser = async (req, res) => {
  const { id } = req.params;
  await User.destroy({ where: { id } });
  res.json({ msg: 'success' });
};

export const updateUser = async (req, res) => {
  const { id } = req.params;
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.json({ error: errors.array() });

  await User.update(req.body, { where: { id } });
  res.json({ msg: 'success' });
};



export const loginUser = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

  const { email, password } = req.body;

  try {
    // البحث عن المستخدم بالـemail
    const user = await User.findOne({ where: { email } });
    if (!user) return res.status(400).json({ error: 'Invalid email or password' });

    // التحقق من الباسورد
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ error: 'Invalid email or password' });

    // إنشاء JWT
    const token = jwt.sign(
      { id: user.id, email: user.email, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: '1d' } // مدة صلاحية التوكن
    );

    res.json({ msg: 'Login success', token, user: { id: user.id, name: user.name, email: user.email, role: user.role } });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
};
