import { Controller, Post, Body } from '@nestjs/common';
import { SensorService } from './sensor.service';
import { CreateSensorDto } from './dto/create-sensor.dto';

@Controller('sensor')
export class SensorController {
  constructor(private sensorService: SensorService) {}

  @Post()
  createMassSensor(@Body() createSensorDto: CreateSensorDto): Promise<Number> {
    return this.sensorService.createMassSensor(createSensorDto);
  }
}
