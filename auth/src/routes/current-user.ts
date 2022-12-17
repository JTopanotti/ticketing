import express from 'express';
import { currentUser } from '@somethingorg/common';

const router = express.Router();

router.get('/api/users/currentuser', currentUser, (req, res) => {
  console.log("Auth Service", req.currentUser);
  res.send({ currentUser: req.currentUser || null });
});

export { router as currentUserRouter };
