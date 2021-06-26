import { Router } from 'express';

import createComplimentController from '../controllers/CreateComplimentController';

import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';

const router = Router();

router.post('/compliments', ensureAuthenticated, async (request, response) => {
  try {
    await createComplimentController.handle(request, response);
  } catch (error) {
    return response.status(404).json({ error: error.message });
  }
});

export default router;
