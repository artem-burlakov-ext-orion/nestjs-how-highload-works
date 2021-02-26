import { Controller, Post, Body, Get, Query } from '@nestjs/common';
import { SensorService } from './sensor.service';
import { CreateSensorDto } from './dto/create-sensor.dto';
import { Sensor } from './sensor.entity';
import { GetSensorsFilterDto } from './dto/get-sensors-filter.dto';

@Controller('sensor')
export class SensorController {
  constructor(private sensorService: SensorService) {}

  @Get()
  getSensors(@Query() filterDto: GetSensorsFilterDto): Promise<Sensor[]> {
    return this.sensorService.getSensors(filterDto);
  }

  @Post()
  createMassSensor(@Body() createSensorDto: CreateSensorDto): Promise<Number> {
    return this.sensorService.createMassSensor(createSensorDto);
  }
}
