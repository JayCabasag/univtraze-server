import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UsePipes,
} from '@nestjs/common';
import { RoomsService } from './rooms.service';
import { CreateRoomDto, CreateRoomSchema } from './dto/create-room.dto';
import { UpdateRoomDto, UpdateRoomSchema } from './dto/update-room.dto';
import { Roles } from 'src/roles/roles.decorator';
import { Role } from 'src/roles/entities/role.entity';
import { CreateRoomValidation } from './validation/create-room.validation';
import { UpdateRoomValidation } from './validation/update-room.validation';
import { RoomIdValidation } from './validation/room-id.validation';

@Controller('rooms')
export class RoomsController {
  constructor(private readonly roomsService: RoomsService) {}

  @Post()
  @Roles(Role.ADMIN)
  @UsePipes(new CreateRoomValidation(CreateRoomSchema))
  create(@Body() createRoomDto: CreateRoomDto) {
    return this.roomsService.create(createRoomDto);
  }

  @Get()
  findAll() {
    return this.roomsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', RoomIdValidation) id: string) {
    return this.roomsService.findById(+id);
  }

  @Patch(':id')
  @Roles(Role.ADMIN)
  update(
    @Param('id', RoomIdValidation) id: string,
    @Body(new UpdateRoomValidation(UpdateRoomSchema))
    updateRoomDto: UpdateRoomDto,
  ) {
    return this.roomsService.update(+id, updateRoomDto);
  }

  @Delete(':id')
  @Roles(Role.ADMIN)
  remove(@Param('id', RoomIdValidation) id: string) {
    return this.roomsService.remove(+id);
  }
}
