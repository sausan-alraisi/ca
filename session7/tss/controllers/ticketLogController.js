import db from '../models/index.js';
import { validationResult } from 'express-validator';

const TicketLog = db.TicketLog;

export const getTicketLogs = async (req, res) => {
  const logs = await TicketLog.findAll();
  res.json({ msg: logs });
};

export const addTicketLog = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.json({ error: errors.array() });

  const log = await TicketLog.create(req.body);
  res.json({ msg: 'success', log });
};

export const deleteTicketLog = async (req, res) => {
  const { id } = req.params;
  await TicketLog.destroy({ where: { id } });
  res.json({ msg: 'success' });
};

export const updateTicketLog = async (req, res) => {
  const { id } = req.params;
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.json({ error: errors.array() });

  await TicketLog.update(req.body, { where: { id } });
  res.json({ msg: 'success' });
};
