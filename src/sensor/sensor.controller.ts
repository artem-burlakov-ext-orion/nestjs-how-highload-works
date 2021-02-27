import { Controller, Post, Body, Param, Get, Patch, Query, ParseIntPipe, UsePipes } from '@nestjs/common';
import { SensorService } from './sensor.service';
import { CreateSensorDto } from './dto/create-sensor.dto';
import { Sensor } from './sensor.entity';
import { GetSensorsFilterDto } from './dto/get-sensors-filter.dto';
import { CreateSensorValidationPipe } from './pipes/create-sensor-validation.pipe';
import { SensorStatus } from './sensor-status.enum';

@Controller('sensor')
export class SensorController {
  constructor(private sensorService: SensorService) {}

  @Get()
  getSensors(@Query() filterDto: GetSensorsFilterDto): Promise<Sensor[]> {
    return this.sensorService.getSensors(filterDto);
  }

  @Get('/:id')
  getSensorById(@Param('id', ParseIntPipe) id: number): Promise<Sensor> {
    return this.sensorService.getSensorById(id);
  }

  @Post()
  @UsePipes(CreateSensorValidationPipe)
  createMassSensor(@Body() createSensorDto: CreateSensorDto): Promise<number> {
    return this.sensorService.createMassSensor(createSensorDto);
  }

  @Patch('/:id/status')
  updateSensorStatus(
    @Param('id', ParseIntPipe) id: number,
    @Body('status') status: SensorStatus,
  ): Promise<Sensor> {
    return this.sensorService.updateSensorStatus(id, status);
  }

}
