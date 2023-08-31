import { Injectable } from '@nestjs/common';
import { CreateVisitedRoomDto } from './dto/create-visited-room.dto';
import { UpdateVisitedRoomDto } from './dto/update-visited-room.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Room } from 'src/rooms/entities/room.entity';
import { Repository } from 'typeorm';
import { VisitedRoom } from './entities/visited-room.entity';
import { RoomsService } from 'src/rooms/rooms.service';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class VisitedRoomsService {
  constructor(
    @InjectRepository(Room)
    readonly roomRepository: Repository<Room>,
    @InjectRepository(VisitedRoom)
    readonly visitedRoomRepository: Repository<VisitedRoom>,
    readonly roomsService: RoomsService,
    readonly userService: UsersService,
  ) {}
  async create(userId: number, createVisitedRoomDto: CreateVisitedRoomDto) {
    const room = await this.roomsService.findById(createVisitedRoomDto.roomId);
    const user = await this.userService.findById(userId);
    const visitedRoom = await this.visitedRoomRepository.create({ room, user });
    return visitedRoom;
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
