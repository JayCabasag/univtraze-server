import { Injectable, PipeTransform, BadRequestException } from '@nestjs/common';

@Injectable()
export class GetUserValidation implements PipeTransform {
  transform(value: any) {
    const parsedValue = Number(value);

    if (isNaN(parsedValue) || typeof parsedValue !== 'number') {
      throw new BadRequestException('ID must be a valid number');
    }

    return parsedValue;
  }
}
