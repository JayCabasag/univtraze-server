import * as Joi from 'joi';

export const createVisitedRoomSchema = Joi.object({
  roomId: Joi.number().required(),
});

export class CreateVisitedRoomDto {
  roomId: number;
}
