import { PartialType } from '@nestjs/mapped-types';
import { CreateVisitedRoomDto } from './create-visited-room.dto';

export class UpdateVisitedRoomDto extends PartialType(CreateVisitedRoomDto) {}
