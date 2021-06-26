import { getCustomRepository } from 'typeorm';
import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';

import { UsersRepositories } from '../repositories/UsersRepositories';

interface IAuthenticateRequest {
  email: string;
  password: string;
}

class AuthenticateUserService {
  async execute({ email, password }: IAuthenticateRequest) {
    const usersRepositories = getCustomRepository(UsersRepositories);

    const user = await usersRepositories.findOne({
      select: ['password', 'email', 'id'],
      where: { email },
    });

    if (!user) {
      throw new Error('E-mail or password is incorrect');
    }

    const passwordMatch = await compare(password, user.password);

    if (!passwordMatch) {
      throw new Error('E-mail or password is incorrect');
    }
    console.log({ secret: process.env.TOKEN_SECRET });

    const token = sign(
      {
        email: user.email,
      },
      process.env.TOKEN_SECRET,
      {
        subject: user.id,
        expiresIn: '1d',
      }
    );

    return token;
  }
}

export { AuthenticateUserService };
