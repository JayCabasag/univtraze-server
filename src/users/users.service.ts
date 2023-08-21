import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async findOne(email: string, type: string): Promise<User | undefined> {
    return await this.usersRepository.findOneBy({ email, type });
  }

  async findAll(): Promise<User[]> {
    return await this.usersRepository.find();
  }

  async create(
    email: string,
    password: string,
    type: string,
  ): Promise<User | undefined> {
    return await this.usersRepository.save({
      email,
      type,
      password,
    });
  }
}
