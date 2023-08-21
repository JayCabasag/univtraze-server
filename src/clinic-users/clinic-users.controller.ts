import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ClinicUsersService } from './clinic-users.service';
import { CreateClinicUserDto } from './dto/create-clinic-user.dto';
import { UpdateClinicUserDto } from './dto/update-clinic-user.dto';

@Controller('clinic-users')
export class ClinicUsersController {
  constructor(private readonly clinicUsersService: ClinicUsersService) {}

  @Post()
  create(@Body() createClinicUserDto: CreateClinicUserDto) {
    return this.clinicUsersService.create(createClinicUserDto);
  }

  @Get()
  findAll() {
    return this.clinicUsersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.clinicUsersService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateClinicUserDto: UpdateClinicUserDto,
  ) {
    return this.clinicUsersService.update(+id, updateClinicUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.clinicUsersService.remove(+id);
  }
}
