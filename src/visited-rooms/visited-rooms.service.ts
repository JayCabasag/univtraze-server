import { Injectable } from '@nestjs/common';
import { CreateVisitedRoomDto } from './dto/create-visited-room.dto';
import { UpdateVisitedRoomDto } from './dto/update-visited-room.dto';

@Injectable()
export class VisitedRoomsService {
  create(userId: number, createVisitedRoomDto: CreateVisitedRoomDto) {
    return 'This action adds a new visitedRoom' + userId;
  }

  findAll() {
    return `This action returns all visitedRooms`;
  }

  findOne(id: number) {
    return `This action returns a #${id} visitedRoom`;
  }

  update(id: number, updateVisitedRoomDto: UpdateVisitedRoomDto) {
    return `This action updates a #${id} visitedRoom`;
  }

  remove(id: number) {
    return `This action removes a #${id} visitedRoom`;
  }
}
