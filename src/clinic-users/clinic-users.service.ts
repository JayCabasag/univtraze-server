import { Injectable } from '@nestjs/common';
import { CreateClinicUserDto } from './dto/create-clinic-user.dto';
import { UpdateClinicUserDto } from './dto/update-clinic-user.dto';

@Injectable()
export class ClinicUsersService {
  create(createClinicUserDto: CreateClinicUserDto) {
    return 'This action adds a new clinicUser';
  }

  findAll() {
    return `This action returns all clinicUsers`;
  }

  findOne(id: number) {
    return `This action returns a #${id} clinicUser`;
  }

  update(id: number, updateClinicUserDto: UpdateClinicUserDto) {
    return `This action updates a #${id} clinicUser`;
  }

  remove(id: number) {
    return `This action removes a #${id} clinicUser`;
  }
}
