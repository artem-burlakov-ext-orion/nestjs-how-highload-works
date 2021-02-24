import { Module } from '@nestjs/common';
import { SensorController } from './sensor/sensor.controller';
import { StatsController } from './stats/stats.controller';
import { StatsService } from './stats/stats.service';
import { SensorService } from './sensor/sensor.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/typeorm.config';
import { ModelModule } from './model/model.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    ModelModule,
  ],
  controllers: [SensorController, StatsController],
  providers: [SensorService, StatsService],

})
export class AppModule {}
