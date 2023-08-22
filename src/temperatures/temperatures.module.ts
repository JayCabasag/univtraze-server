import { Module } from '@nestjs/common';
import { TemperaturesService } from './temperatures.service';
import { TemperaturesController } from './temperatures.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Temperature } from './entities/temperature.entity';
import { UsersModule } from 'src/users/users.module';
import { RoomsModule } from 'src/rooms/rooms.module';

@Module({
  imports: [UsersModule, RoomsModule, TypeOrmModule.forFeature([Temperature])],
  controllers: [TemperaturesController],
  providers: [TemperaturesService],
  exports: [TemperaturesService],
})
export class TemperaturesModule {}
