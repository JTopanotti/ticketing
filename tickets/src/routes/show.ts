import express, { Request, Response } from 'express';
import { requireAuth, validateRequest } from '@somethingorg/common';
import { body } from 'express-validator';
import { Ticket } from '../models/ticket';

const router = express.Router();

router.post('/api/tickets/:id', requireAuth,
    async (req: Request, res: Response) => {
    
    
});

export { router as showTicketRouter };