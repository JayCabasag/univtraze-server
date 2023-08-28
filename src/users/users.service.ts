import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User, UserType } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async findOne(email: string, type: UserType): Promise<User | undefined> {
    return await this.usersRepository.findOneBy({ email, type });
  }

  async findById(id: number) {
    const user = await this.usersRepository.findOneBy({ id });
    if (!user) {
      throw new NotFoundException('User not found');
    }
    const { password, ...userAttributes } = user;
    return userAttributes;
  }

  async findAll(): Promise<User[]> {
    return await this.usersRepository.find();
  }

  async create(
    email: string,
    password: string,
    type: UserType,
  ): Promise<User | undefined> {
    return await this.usersRepository.save({
      email,
      type,
      password,
    });
  }

  async save(user): Promise<User | undefined> {
    return await this.usersRepository.save(user);
  }
}
