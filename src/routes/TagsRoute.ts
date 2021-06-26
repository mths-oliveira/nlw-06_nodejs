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
  createTagController.handle
);

router.get('/tags', ensureAuthenticated, listTagsController.handle);

export default router;
