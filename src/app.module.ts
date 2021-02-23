import { Module } from '@nestjs/common';
import { SensorController } from './sensor/sensor.controller';
import { ModelController } from './model/model.controller';
import { FirmwareController } from './firmware/firmware.controller';
import { StatsController } from './stats/stats.controller';
import { StatsService } from './stats/stats.service';
import { ModelService } from './model/model.service';
import { SensorService } from './sensor/sensor.service';
import { FirmwareService } from './firmware/firmware.service';

@Module({
  imports: [],
  controllers: [SensorController, ModelController, FirmwareController, StatsController],
  providers: [SensorService, ModelService, FirmwareService, StatsService],

})
export class AppModule {}
