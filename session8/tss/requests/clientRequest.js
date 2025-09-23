import { body } from 'express-validator';

export const createClientValidation = [
  body('name').notEmpty().withMessage('Client name is required')
];

export const updateClientValidation = [
  body('name').optional().notEmpty().withMessage('Client name is required')
];
