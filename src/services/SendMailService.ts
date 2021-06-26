import { createTransport } from 'nodemailer';
import { getCustomRepository } from 'typeorm';

import { UsersRepositories } from '../repositories/UsersRepositories';

interface ISendMailService {
  user_sender: string;
  user_receiver: string;
  message: string;
}

class SendMailService {
  async execute({ user_receiver, user_sender, message }: ISendMailService) {
    const usersRepository = getCustomRepository(UsersRepositories);

    const userReceiver = await usersRepository.findOne({
      where: { id: user_receiver },
      select: ['name', 'email'],
    });

    if (!userReceiver) {
      throw new Error('User Receiver does not exists!');
    }

    const userSender = await usersRepository.findOne({
      where: { id: user_sender },
      select: ['name', 'email'],
    });

    const transporter = createTransport({
      service: process.env.SERVICEMAIL,
      auth: {
        user: process.env.USERMAIL,
        pass: process.env.PASSMAIL,
      },
    });

    transporter.sendMail({
      from: process.env.USERMAIL,
      to: userReceiver.email,
      replyTo: userSender.email,
      subject: `${userSender.name} lhe fez o seguinte elogio:`,
      html: `<p style="font-size: 16px; color: #565857;">${message}</p>`,
    });
  }
}

export { SendMailService };
