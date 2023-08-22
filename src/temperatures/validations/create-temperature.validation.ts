import { PipeTransform, Injectable, BadRequestException } from '@nestjs/common';
import { ObjectSchema } from 'joi';

@Injectable()
export class CreateTemperatureValidation implements PipeTransform {
  constructor(private schema: ObjectSchema) {}
  transform(value: any) {
    const { error } = this.schema.validate(value);
    if (error) {
      throw new BadRequestException('Missing required entities');
    }
    return value;
  }
}
