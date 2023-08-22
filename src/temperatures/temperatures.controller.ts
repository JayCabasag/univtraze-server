import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpCode,
  HttpStatus,
  UsePipes,
} from '@nestjs/common';
import { TemperaturesService } from './temperatures.service';
import {
  CreateTemperatureDto,
  createTemperatureSchema,
} from './dto/create-temperature.dto';
import { UpdateTemperatureDto } from './dto/update-temperature.dto';
import { Public } from 'src/auth/auth.decorator';
import { CreateTemperatureValidation } from './validations/create-temperature.validation';

@Controller('temperatures')
export class TemperaturesController {
  constructor(private readonly temperaturesService: TemperaturesService) {}

  @Public()
  @HttpCode(HttpStatus.OK)
  @Post()
  @UsePipes(new CreateTemperatureValidation(createTemperatureSchema))
  create(@Body() createTemperatureDto: CreateTemperatureDto) {
    return this.temperaturesService.create(createTemperatureDto);
  }

  @Get()
  findAll() {
    return this.temperaturesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.temperaturesService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateTemperatureDto: UpdateTemperatureDto,
  ) {
    return this.temperaturesService.update(+id, updateTemperatureDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.temperaturesService.remove(+id);
  }
}
