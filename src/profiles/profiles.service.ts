import { Inject, Injectable, forwardRef } from '@nestjs/common';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Profile } from './entities/profile.entity';
import { Repository } from 'typeorm';
import { UsersService } from 'src/users/users.service';
import { User } from 'src/users/entities/user.entity';

@Injectable()
export class ProfilesService {
  constructor(
    @InjectRepository(Profile)
    private profileRepository: Repository<Profile>,
    @Inject(forwardRef(() => UsersService))
    private userService: UsersService,
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async create(createProfileDto: CreateProfileDto) {
    const user = await this.userService.findById(createProfileDto.userId);
    const profile = {
      user: user,
      first_name: createProfileDto.firstName,
      middle_name: createProfileDto.middleName,
      last_name: createProfileDto.lastName,
      suffix: createProfileDto.suffix,
      gender: createProfileDto.gender,
      address: createProfileDto.address,
      date_of_birth: createProfileDto.dateOfBirth,
      phone_number: createProfileDto.phoneNumber,
    };
    await this.userService.save({
      ...user,
      verified: true,
      profile,
    });
    const newProfile = await this.profileRepository.save(profile);
    return { ...newProfile, user: { ...user, verified: true } };
  }

  findAll() {
    return `This action returns all profiles`;
  }

  findOne(id: number) {
    return `This action returns a #${id} profile`;
  }

  async update(id: number, updateProfileDto: UpdateProfileDto) {
    const profileToSave = {
      id,
      first_name: updateProfileDto.firstName,
      middle_name: updateProfileDto.middleName,
      last_name: updateProfileDto.lastName,
      suffix: updateProfileDto.suffix,
      gender: updateProfileDto.gender,
      address: updateProfileDto.address,
      date_of_birth: updateProfileDto.dateOfBirth,
      phone_number: updateProfileDto.phoneNumber,
    };

    const updatedProfile = await this.profileRepository.save(profileToSave);
    const user = await this.userRepository.findOne({
      where: { profile: updatedProfile },
    });
    const { password, profile, ...otherAttributes } = user;
    return { ...updatedProfile, user: otherAttributes };
  }

  remove(id: number) {
    return `This action removes a #${id} profile`;
  }
}
