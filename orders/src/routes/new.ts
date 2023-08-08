import express, { Request, Response } from 'express';
import { requireAuth, validateRequest } from '@somethingorg/common';
import { body } from 'express-validator';
import mongoose, { mongo } from 'mongoose';

const router = express.Router();

router.post('/api/orders', requireAuth, [
    body('ticketId')
        .not().isEmpty()
        //*expects Tickets service to use Mongo as DB
        .custom((value: string) => { mongoose.Types.ObjectId.isValid(value); })
        .withMessage("TicketId must be provided")
], validateRequest, async (req: Request, res: Response) => {
    res.send({});
});

export { router as newOrderRouter };