import { Router } from 'express';

import createTagController from '../controllers/CreateTagController';
import listTagsController from '../controllers/ListTagsController';

import { ensureAdmin } from '../middlewares/ensureAdmin';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';

const router = Router();

router.post(
  '/tags',
  ensureAuthenticated,
  ensureAdmin,
  async (request, response) => {
    try {
      await createTagController.handle(request, response);
    } catch (error) {
      return response.status(409).json({ error: error.message });
    }
  }
);

router.get('/tags', ensureAuthenticated, async (request, response) => {
  try {
    await listTagsController.handle(request, response);
  } catch (error) {
    return response.status(404).json({ error: error.message });
  }
});

export default router;
