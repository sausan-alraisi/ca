import { body } from 'express-validator';

export const createTicketValidation = [
  body('title').notEmpty().withMessage('Title is required'),
  body('description').notEmpty().withMessage('Description is required')
];

export const updateTicketValidation = [
  body('title').optional().notEmpty().withMessage('Title is required'),
  body('description').optional().notEmpty().withMessage('Description is required')
];
