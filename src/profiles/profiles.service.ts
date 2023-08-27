import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Profile } from './entities/profile.entity';
import { Repository } from 'typeorm';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class ProfilesService {
  constructor(
    @InjectRepository(Profile)
    private profileRepository: Repository<Profile>,
    private userService: UsersService,
  ) {}

  async create(createProfileDto: CreateProfileDto) {
    const user = await this.userService.findById(createProfileDto.userId);
    const { password, ...otherUserProperties } = user;
    if (!user) {
      throw new NotFoundException('User not found');
    }
    const profile = {
      user: user,
      first_name: createProfileDto.firstName,
      middle_name: createProfileDto.middleName,
      last_name: createProfileDto.lastName,
      suffix: createProfileDto.suffix,
      gender: createProfileDto.gender,
      address: createProfileDto.address,
      phoneNumber: createProfileDto.phoneNumber,
      date_of_birth: createProfileDto.dateOfBirth,
      phone_number: createProfileDto.phoneNumber,
    };
    await this.userService.save({
      ...user,
      verified: true,
      profile,
    });
    const newProfile = await this.profileRepository.save(profile);
    return { ...newProfile, user: { ...otherUserProperties, verified: true } };
  }

  findAll() {
    return `This action returns all profiles`;
  }

  findOne(id: number) {
    return `This action returns a #${id} profile`;
  }

  update(id: number, updateProfileDto: UpdateProfileDto) {
    return `This action updates a #${id} profile`;
  }

  remove(id: number) {
    return `This action removes a #${id} profile`;
  }
}
