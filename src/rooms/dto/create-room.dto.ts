import * as Joi from 'joi';

export const CreateRoomSchema = Joi.object({
  building_number: Joi.string().required(),
  building_name: Joi.string().required(),
  room_number: Joi.string().required(),
  room_name: Joi.string().required(),
});

export class CreateRoomDto {
  building_number: string;
  building_name: string;
  room_number: string;
  room_name: string;
}
