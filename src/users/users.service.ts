import { Injectable } from '@nestjs/common';
import { User } from './interface/user.interface';

@Injectable()
export class UsersService {
  private readonly users = [
    {
      userId: 1,
      email: 'jaycabasag@gmail.com',
      verified: false,
      type: 'user',
      password: 'password',
    },
    {
      userId: 2,
      email: 'jay@gmail.com',
      verified: false,
      type: 'admin',
      password: 'password',
    },
  ];

  async findOne(email: string, type: string): Promise<User | undefined> {
    return this.users.find(
      (user) => user.email === email && user.type === type,
    );
  }
  async create(
    email: string,
    type: string,
    password: string,
  ): Promise<User | undefined> {
    const user = {
      userId: this.users.length + 1,
      email,
      verified: false,
      type,
      password,
    } as User;
    this.users.push(user);
    return user;
  }
}
