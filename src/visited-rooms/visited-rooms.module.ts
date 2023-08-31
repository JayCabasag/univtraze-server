import { Module } from '@nestjs/common';
import { VisitedRoomsService } from './visited-rooms.service';
import { VisitedRoomsController } from './visited-rooms.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VisitedRoom } from './entities/visited-room.entity';
import { Room } from 'src/rooms/entities/room.entity';
import { RoomsModule } from 'src/rooms/rooms.module';
import { UsersModule } from 'src/users/users.module';

@Module({
  imports: [
    RoomsModule,
    UsersModule,
    TypeOrmModule.forFeature([VisitedRoom, Room]),
  ],
  controllers: [VisitedRoomsController],
  providers: [VisitedRoomsService],
})
export class VisitedRoomsModule {}
