import {
  Injectable,
  NotFoundException,
  InternalServerErrorException,
  ConflictException,
} from '@nestjs/common';
import { CreateRoomDto } from './dto/create-room.dto';
import { UpdateRoomDto } from './dto/update-room.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Room } from './entities/room.entity';
import { Repository } from 'typeorm';

@Injectable()
export class RoomsService {
  constructor(
    @InjectRepository(Room) private roomRepository: Repository<Room>,
  ) {}
  async create(createRoomDto: CreateRoomDto) {
    const room = this.roomRepository.create(createRoomDto);
    const existingRoom = await this.roomRepository.findOneBy(createRoomDto);
    if (existingRoom) {
      throw new ConflictException('This room already exists');
    }
    const result = await this.roomRepository.save(room);
    if (!result) {
      throw new InternalServerErrorException('Internal Server error');
    }
    return result;
  }

  findAll() {
    return `This action returns all rooms`;
  }

  async findById(id: number) {
    const room = await this.roomRepository.findOneBy({ id });
    if (!room) {
      throw new NotFoundException('Room not found');
    }
    return room;
  }

  async update(id: number, updateRoomDto: UpdateRoomDto) {
    const existingRoom = await this.roomRepository.findOneBy(updateRoomDto);
    if (existingRoom) {
      throw new ConflictException('This room already exists');
    }
    const room = await this.findById(id);
    const updatedRoom: Room = {
      ...room,
      ...updateRoomDto,
    };
    const result = await this.roomRepository.save(updatedRoom);
    return result;
  }

  remove(id: number) {
    return `This action removes a #${id} room`;
  }
}
