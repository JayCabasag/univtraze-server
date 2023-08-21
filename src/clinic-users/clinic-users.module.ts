import { Module } from '@nestjs/common';
import { ClinicUsersService } from './clinic-users.service';
import { ClinicUsersController } from './clinic-users.controller';

@Module({
  controllers: [ClinicUsersController],
  providers: [ClinicUsersService],
})
export class ClinicUsersModule {}
