import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UsePipes,
  Request,
} from '@nestjs/common';
import { ProfilesService } from './profiles.service';
import {
  CreateProfileDto,
  CreateProfileSchema,
} from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { CreateProfileValidation } from './validation/create-profile.validation';

@Controller('profiles')
export class ProfilesController {
  constructor(private readonly profilesService: ProfilesService) {}

  @Post()
  @UsePipes(new CreateProfileValidation(CreateProfileSchema))
  create(@Request() request, @Body() createProfileDto: CreateProfileDto) {
    const userId = request.user.sub;
    return this.profilesService.create(+userId, createProfileDto);
  }

  @Get()
  findAll() {
    return this.profilesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.profilesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProfileDto: UpdateProfileDto) {
    return this.profilesService.update(+id, updateProfileDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.profilesService.remove(+id);
  }
}
