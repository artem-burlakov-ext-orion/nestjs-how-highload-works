import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/config';
import { ModelModule } from './model/model.module';
import { SensorModule } from './sensor/sensor.module';
import { FirmwareModule } from './firmware/firmware.module';
import { StatsModule } from './stats/stats.module';
import { ScheduleModule } from '@nestjs/schedule';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    ScheduleModule.forRoot(),
    ModelModule,
    SensorModule,
    FirmwareModule,
    StatsModule,
  ],
})
export class AppModule {}
