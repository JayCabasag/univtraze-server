import { PartialType } from '@nestjs/mapped-types';
import { CreateRoomDto } from './create-room.dto';
import * as Joi from 'joi';

export const UpdateRoomSchema = Joi.object({
  building_number: Joi.string().required(),
  building_name: Joi.string().required(),
  room_number: Joi.string().required(),
  room_name: Joi.string().required(),
});

export class UpdateRoomDto extends PartialType(CreateRoomDto) {}
