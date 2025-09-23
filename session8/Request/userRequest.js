import { body , query  } from 'express-validator';

export const addNewUserRequest = [
        body("name").notEmpty().isLength({min:2}),
        body("email").notEmpty().withMessage("email is required"),
        body("password").notEmpty().withMessage("password is required")
]


export const updateUserRequest = [
    query("id").isEmpty()
]