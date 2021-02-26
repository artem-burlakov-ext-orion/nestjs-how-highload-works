import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SensorRepository } from './sensor.repository';
import { SensorService } from './sensor.service';
import { SensorController } from './sensor.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([SensorRepository])
  ],
  controllers: [SensorController],
  providers: [SensorService],
})
export class SensorModule {}
