import { Injectable } from '@nestjs/common';
import { SensorRepository } from './sensor.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateSensorDto } from './dto/create-sensor.dto';
import { GetSensorsFilterDto } from './dto/get-sensors-filter.dto';
import { Sensor } from './sensor.entity';

@Injectable()
export class SensorService {
  constructor(
    @InjectRepository(SensorRepository)
    private sensorRepository: SensorRepository) {}

    async getSensors(filterDto: GetSensorsFilterDto): Promise<Sensor[]> {
      const sensors = await this.sensorRepository.getSensors(filterDto);
      return sensors;
    }

    async createMassSensor(createSensorDto: CreateSensorDto): Promise<number> {
      const createdCount = await this.sensorRepository.createMassSensor(createSensorDto);
      return createdCount;
    }
}
