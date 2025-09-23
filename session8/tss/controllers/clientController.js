import db from '../models/index.js';
import { validationResult } from 'express-validator';

const Client = db.Client;

export const getClients = async (req, res) => {
  const clients = await Client.findAll();
  res.json({ msg: clients });
};

export const addClient = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.json({ error: errors.array() });

  const client = await Client.create(req.body);
  res.json({ msg: 'success', client });
};

export const deleteClient = async (req, res) => {
  const { id } = req.params;
  await Client.destroy({ where: { id } });
  res.json({ msg: 'success' });
};

export const updateClient = async (req, res) => {
  const { id } = req.params;
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.json({ error: errors.array() });

  await Client.update(req.body, { where: { id } });
  res.json({ msg: 'success' });
};
