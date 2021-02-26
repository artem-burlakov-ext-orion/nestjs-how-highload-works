import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/typeorm.config';
import { ModelModule } from './model/model.module';
import { SensorModule } from './sensor/sensor.module';
import { FirmwareModule } from './firmware/firmware.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    ModelModule,
    SensorModule,
    FirmwareModule,
  ],
})
export class AppModule {}
