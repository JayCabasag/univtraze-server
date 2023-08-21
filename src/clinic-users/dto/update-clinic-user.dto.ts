import { PartialType } from '@nestjs/mapped-types';
import { CreateClinicUserDto } from './create-clinic-user.dto';

export class UpdateClinicUserDto extends PartialType(CreateClinicUserDto) {}
