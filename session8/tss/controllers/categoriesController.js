import db from '../models/index.js';
import { validationResult } from 'express-validator';

const   Categories = db.Categories;

export const getCategories = async (req, res) => {
  const categories = await Categories.findAll();
  res.json({ msg: categories });
};

export const addCategories = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.json({ error: errors.array() });

  const categories = await  Categories.create(req.body);
  res.json({ msg: 'success', categories });
};

export const deleteCategories = async (req, res) => {
  const { id } = req.params;
  await Categories.destroy({ where: { id } });
  res.json({ msg: 'success' });
};

export const updateCategories = async (req, res) => {
  const { id } = req.params;
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.json({ error: errors.array() });

  await Categories.update(req.body, { where: { id } });
  res.json({ msg: 'success' });
};
