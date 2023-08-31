import { Injectable, PipeTransform, BadRequestException } from '@nestjs/common';
import { ObjectSchema } from 'joi';

@Injectable()
export class CreateVisitedRoomValidation implements PipeTransform {
  constructor(private schema: ObjectSchema) {}
  transform(value: any) {
    const { error } = this.schema.validate(value);
    if (error) {
      throw new BadRequestException('Missing or Incorrect required entities');
    }
    return value;
  }
}
