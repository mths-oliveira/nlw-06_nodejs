import { Response } from 'express';
import { ListUserService } from '../services/ListUsersService';

class ListUsersController {
  async handle(_, response: Response) {
    const listUsersService = new ListUserService();

    const users = await listUsersService.execute();

    return response.json(users);
  }
}

export default new ListUsersController();
