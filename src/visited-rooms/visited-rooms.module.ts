import { Module } from '@nestjs/common';
import { VisitedRoomsService } from './visited-rooms.service';
import { VisitedRoomsController } from './visited-rooms.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VisitedRoom } from './entities/visited-room.entity';

@Module({
  imports: [TypeOrmModule.forFeature([VisitedRoom])],
  controllers: [VisitedRoomsController],
  providers: [VisitedRoomsService],
})
export class VisitedRoomsModule {}
