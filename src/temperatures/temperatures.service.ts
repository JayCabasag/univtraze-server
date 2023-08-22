import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTemperatureDto } from './dto/create-temperature.dto';
import { UpdateTemperatureDto } from './dto/update-temperature.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Temperature } from './entities/temperature.entity';
import { Repository } from 'typeorm';
import { UsersService } from 'src/users/users.service';
import { RoomsService } from 'src/rooms/rooms.service';

@Injectable()
export class TemperaturesService {
  constructor(
    @InjectRepository(Temperature)
    private temperatureRepository: Repository<Temperature>,
    private usersService: UsersService,
    private roomsService: RoomsService,
  ) {}

  async create(createTemperatureDto: CreateTemperatureDto) {
    const user = await this.usersService.findById(createTemperatureDto.userId);
    const { password, ...otherProperties } = user;
    if (!user) {
      throw new NotFoundException('User not found');
    }
    const room = await this.roomsService.findOneById(
      createTemperatureDto.roomId,
    );
    if (!room) {
      throw new NotFoundException('Room not found');
    }
    return this.temperatureRepository.save({
      room,
      user: otherProperties,
      temperature: createTemperatureDto.temperature,
      unit: createTemperatureDto.unit,
    });
  }

  findAll() {
    return `This action returns all temperatures`;
  }

  findOne(id: number) {
    return `This action returns a #${id} temperature`;
  }

  update(id: number, updateTemperatureDto: UpdateTemperatureDto) {
    return `This action updates a #${id} temperature`;
  }

  remove(id: number) {
    return `This action removes a #${id} temperature`;
  }
}
