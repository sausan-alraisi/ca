import db from '../models/index.js';
import { validationResult } from 'express-validator';
import bcrypt from 'bcrypt';

const User = db.User;

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
