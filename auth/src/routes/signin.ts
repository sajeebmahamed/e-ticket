import express, { Request, Response } from 'express'
import { body, validationResult } from 'express-validator'
import { RequestValidationError } from '../errors/request-validation-error'
import { validateRequest } from '../middlewares/validate-request'

const router = express.Router()

router.post('/api/users/signin', [
    body('email')
        .isEmail()
        .withMessage('Email must be valid'),
    body('password')
        .trim()
        .notEmpty()
        .withMessage('You must enter a password')
], validateRequest, (req:Request, res:Response) => {
    res.send('Hi there!')
})

router.get('/api/users/signin', (req, res) => {
    res.send('Hi there 2!')
})

export { router as signinRouter }