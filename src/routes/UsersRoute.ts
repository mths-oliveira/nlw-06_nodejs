import { Router } from 'express';

import createUserController from '../controllers/CreateUserController';
import authenticateUserController from '../controllers/AuthenticateUserController';
import listUsersController from '../controllers/ListUsersController';

import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';

const router = Router();

router.post('/users', async (request, response) => {
  try {
    await createUserController.handle(request, response);
  } catch (error) {
    return response.status(409).json({ error: error.message });
  }
});

router.post('/login', async (request, response) => {
  try {
    await authenticateUserController.handle(request, response);
  } catch (error) {
    return response.status(400).json({ error: error.message });
  }
});

router.get('/users', ensureAuthenticated, async (request, response) => {
  try {
    await listUsersController.handle(request, response);
  } catch (error) {
    return response.status(404).json({ error: error.message });
  }
});

export default router;
