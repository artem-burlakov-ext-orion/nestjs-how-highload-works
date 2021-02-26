import { Injectable } from '@nestjs/common';
import { SensorRepository } from './sensor.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateSensorDto } from './dto/create-sensor.dto';

@Injectable()
export class SensorService {
  constructor(
    @InjectRepository(SensorRepository)
    private sensorRepository: SensorRepository) {}

    async createMassSensor(createSensorDto: CreateSensorDto): Promise<number> {
      return this.sensorRepository.createMassSensor(createSensorDto);
    }


}
