import {
  Inject,
  Injectable,
  NotFoundException,
  forwardRef,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User, UserType } from './entities/user.entity';
import { ProfilesService } from 'src/profiles/profiles.service';

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
    const { password, ...otherUserAttributes } = user;
    return otherUserAttributes;
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
