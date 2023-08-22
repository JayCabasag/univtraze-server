import * as Joi from 'joi';

export const createTemperatureSchema = Joi.object({
  userId: Joi.number().required(),
  roomId: Joi.number().required(),
  temperature: Joi.number().required(),
  unit: Joi.string().required(),
});

export class CreateTemperatureDto {
  userId: number;
  roomId: number;
  temperature: number;
  unit: string;
}
