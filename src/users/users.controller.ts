import { Controller, Get, Param } from '@nestjs/common';
import { UsersService } from './users.service';
import { GetUserValidation } from './validators/get-user.validator';

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}

  @Get(':id')
  getUser(@Param('id', GetUserValidation) id: number) {
    return this.userService.findById(id);
  }
}
