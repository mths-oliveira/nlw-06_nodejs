import { Router } from 'express';

import createUserController from '../controllers/CreateUserController';
import authenticateUserController from '../controllers/AuthenticateUserController';
import listUserSendComplimentsController from '../controllers/ListUserSendComplimentsController';
import listUserReceiveComplimentsController from '../controllers/ListUserReceiveComplimentsController';
import listUsersController from '../controllers/ListUsersController';

import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';

const router = Router();

router.post('/users', createUserController.handle);
router.post('/login', authenticateUserController.handle);

router.get(
  '/users/compliments/send',
  ensureAuthenticated,
  listUserSendComplimentsController.handle
);
router.get(
  '/users/compliments/receive',
  ensureAuthenticated,
  listUserReceiveComplimentsController.handle
);

router.get('/users', ensureAuthenticated, listUsersController.handle);

export default router;
