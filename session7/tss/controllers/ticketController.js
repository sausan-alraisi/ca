import db from '../models/index.js';
import { validationResult } from 'express-validator';

const Ticket = db.Ticket;

export const getTickets = async (req, res) => {
  const tickets = await Ticket.findAll();
  res.json({ msg: tickets });
};

export const addTicket = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.json({ error: errors.array() });

     let ticketData = { ...req.body };

    if (req.file) {
      ticketData.attachment = req.file.filename; 
    }

    const ticket = await Ticket.create(ticketData);

  res.json({ msg: 'success', ticket });
};

export const deleteTicket = async (req, res) => {
  const { id } = req.params;
  await Ticket.destroy({ where: { id } });
  res.json({ msg: 'success' });
};

export const updateTicket = async (req, res) => {
  const { id } = req.params;
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.json({ error: errors.array() });

  await Ticket.update(req.body, { where: { id } });
  res.json({ msg: 'success' });
};
