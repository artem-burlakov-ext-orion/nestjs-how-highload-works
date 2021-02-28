import { Module, HttpModule } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SensorRepository } from './sensor.repository';
import { SensorService } from './sensor.service';
import { SensorController } from './sensor.controller';
import { SensorVirtualizer } from './sensor-virtualizer';

@Module({
  imports: [
    TypeOrmModule.forFeature([SensorRepository]),
    HttpModule,
  ],
  controllers: [SensorController],
  providers: [SensorService, SensorVirtualizer],
})
export class SensorModule {}
