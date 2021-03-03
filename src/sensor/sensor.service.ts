import { Injectable, NotFoundException } from '@nestjs/common';
import { SensorRepository } from './sensor.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateSensorDto } from './dto/create-sensor.dto';
import { GetSensorsFilterDto } from './dto/get-sensors-filter.dto';
import { Sensor } from './sensor.entity';
import { SensorStatus } from './sensor-status.enum';
import { InsertResult } from 'typeorm';
import { SensorVirtualizer } from './sensor-virtualizer';
import { Interval, SchedulerRegistry, Timeout } from '@nestjs/schedule';
import { checkInstalledInterval, sendDataInterval } from '../config/config';
import { MockFactory } from 'mockingbird-ts';
import { FakeAddress } from './sensor-fake-data';


@Injectable()
export class SensorService {
  constructor(
    @InjectRepository(SensorRepository)
    private sensorRepository: SensorRepository,
    private sensorVirtualizer: SensorVirtualizer,
    private schedulerRegistry: SchedulerRegistry,
  ) {}

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

    async createMassSensor(createSensorDto: CreateSensorDto): Promise<InsertResult> {
      const inserted = await this.sensorRepository.createMassSensor(createSensorDto);
      return inserted;
    }

    async updateSensorStatus(id: number, status: SensorStatus): Promise<Sensor> {
      const sensor = await this.getSensorById(id);
      sensor.status = status;
      await sensor.save();
      return sensor;
    }

    @Timeout(Number(checkInstalledInterval))//replace to Interval
    async virtualizeSensors() {
      const installed = await this.getSensors({ status: SensorStatus.INSTALLED });
      installed.forEach((sensor) => {
        const { address } = MockFactory.create<FakeAddress>(FakeAddress);
        const interval = setInterval(() => {
          const data = this.sensorVirtualizer.genData(sensor);
          data['addr'] = address;
          this.sensorVirtualizer.sendData(data);
        }, Number(sendDataInterval));
        this.schedulerRegistry.addInterval(`sensor_${sensor.id}`, interval);
      })
    }
}
