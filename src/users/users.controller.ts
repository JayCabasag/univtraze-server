import { Controller, Get, Param } from '@nestjs/common';
import { UsersService } from './users.service';
import { UserIdValidation } from './validators/get-user.validator';

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}

  @Get(':id')
  getUser(@Param('id', UserIdValidation) id: number) {
    return this.userService.findById(id);
  }
}
