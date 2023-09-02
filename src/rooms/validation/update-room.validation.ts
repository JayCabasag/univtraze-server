import { PipeTransform, Injectable, BadRequestException } from '@nestjs/common';
import { ObjectSchema } from 'joi';

@Injectable()
export class UpdateRoomValidation implements PipeTransform {
  constructor(private schema: ObjectSchema) {}
  transform(value: any) {
    const { error } = this.schema.validate(value);
    console.log(value, error);
    if (error) {
      throw new BadRequestException('Missing required entities');
    }
    return value;
  }
}
