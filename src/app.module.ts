import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/typeorm.config';
import { ModelModule } from './model/model.module';
import { SensorModule } from './sensor/sensor.module';
import { FirmwareModule } from './firmware/firmware.module';
import { StatsModule } from './stats/stats.module';
import { StartModule } from './start/start.module';
import { ScheduleModule } from '@nestjs/schedule';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    ScheduleModule.forRoot(),
    ModelModule,
    SensorModule,
    FirmwareModule,
    StatsModule,

    // StartModule,
  ],
})
export class AppModule {}
