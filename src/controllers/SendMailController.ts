import { Request, Response } from 'express';
import { SendMailService } from '../services/SendMailService';

class SendMailController {
  async handle(request: Request, response: Response) {
    const { user_receiver, message } = request.body;
    const { user_id } = request;

    const sendMailService = new SendMailService();

    const compliment = await sendMailService.execute({
      user_sender: user_id,
      user_receiver,
      message,
    });

    return response.json(compliment);
  }
}

export default new SendMailController();
