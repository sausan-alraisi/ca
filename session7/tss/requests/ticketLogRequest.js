import { body } from 'express-validator';

export const createTicketLogValidation = [
  body('ticket_id').notEmpty().withMessage('Ticket ID is required'),
  body('log_info').notEmpty().withMessage('Log info is required')
];

export const updateTicketLogValidation = [
  body('ticket_id').optional().notEmpty().withMessage('Ticket ID is required'),
  body('log_info').optional().notEmpty().withMessage('Log info is required')
];
