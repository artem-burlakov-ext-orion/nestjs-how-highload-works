import { Injectable, NotFoundException } from '@nestjs/common';
import { SensorRepository } from './sensor.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateSensorDto } from './dto/create-sensor.dto';
import { GetSensorsFilterDto } from './dto/get-sensors-filter.dto';
import { Sensor } from './sensor.entity';
import { SensorStatus } from './sensor-status.enum';

@Injectable()
export class SensorService {
  constructor(
    @InjectRepository(SensorRepository)
    private sensorRepository: SensorRepository) {}

    async getSensorById(id: number): Promise<Sensor> {
      const sensor = await this.sensorRepository.findOne(id);
      if (!sensor) {
        throw new NotFoundException(`Sensor with id '${id}' not found`);
      }
      return sensor;
    }

    async getSensors(filterDto: GetSensorsFilterDto): Promise<Sensor[]> {
      const sensors = await this.sensorRepository.getSensors(filterDto);
      return sensors;
    }

    async createMassSensor(createSensorDto: CreateSensorDto): Promise<number> {
      const createdCount = await this.sensorRepository.createMassSensor(createSensorDto);
      return createdCount;
    }

    async updateSensorStatus(id: number, status: SensorStatus): Promise<Sensor> {
      const sensor = await this.getSensorById(id);
      sensor.status = status;
      await sensor.save();
      return sensor;
      
    }
}
