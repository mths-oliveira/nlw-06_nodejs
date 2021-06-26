import { Router } from 'express';

import createComplimentController from '../controllers/CreateComplimentController';
import sendMailController from '../controllers/SendMailController';
import listUserSendComplimentsController from '../controllers/ListUserSendComplimentsController';
import listUserReceiveComplimentsController from '../controllers/ListUserReceiveComplimentsController';

import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';

const router = Router();

router.post('/compliments', ensureAuthenticated, async (request, response) => {
  try {
    await createComplimentController.handle(request, response);

    await sendMailController.handle(request, response);
  } catch (error) {
    return response.status(404).json({ error: error.message });
  }
});

router.get(
  '/users/compliments/send',
  ensureAuthenticated,
  async (request, response) => {
    try {
      await listUserSendComplimentsController.handle(request, response);
    } catch (error) {
      return response.status(404).json({ error: error.message });
    }
  }
);

router.get(
  '/users/compliments/receive',
  ensureAuthenticated,
  async (request, response) => {
    try {
      await listUserReceiveComplimentsController.handle(request, response);
    } catch (error) {
      return response.status(404).json({ error: error.message });
    }
  }
);

export default router;
