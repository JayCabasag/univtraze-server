import { Module } from '@nestjs/common';
import { VisitedRoomsService } from './visited-rooms.service';
import { VisitedRoomsController } from './visited-rooms.controller';

@Module({
  controllers: [VisitedRoomsController],
  providers: [VisitedRoomsService],
})
export class VisitedRoomsModule {}
