import { Router } from 'express';

import createComplimentController from '../controllers/CreateComplimentController';

import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';

const router = Router();

router.post(
  '/compliments',
  ensureAuthenticated,
  createComplimentController.handle
);

export default router;
