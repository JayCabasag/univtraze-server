import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Request,
  UsePipes,
} from '@nestjs/common';
import { VisitedRoomsService } from './visited-rooms.service';
import {
  CreateVisitedRoomDto,
  createVisitedRoomSchema,
} from './dto/create-visited-room.dto';
import { UpdateVisitedRoomDto } from './dto/update-visited-room.dto';
import { CreateVisitedRoomValidation } from './validators/create-visited-room.validator';

@Controller('visited-rooms')
export class VisitedRoomsController {
  constructor(private readonly visitedRoomsService: VisitedRoomsService) {}

  @Post()
  @UsePipes(new CreateVisitedRoomValidation(createVisitedRoomSchema))
  create(
    @Request() request,
    @Body() createVisitedRoomDto: CreateVisitedRoomDto,
  ) {
    const userId = request.user.sub;
    return this.visitedRoomsService.create(userId, createVisitedRoomDto);
  }

  @Get()
  findAll() {
    return this.visitedRoomsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.visitedRoomsService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateVisitedRoomDto: UpdateVisitedRoomDto,
  ) {
    return this.visitedRoomsService.update(+id, updateVisitedRoomDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.visitedRoomsService.remove(+id);
  }
}
