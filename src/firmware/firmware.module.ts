import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { FirmwareRepository } from './firmware.repository';
import { FirmwareController } from './firmware.controller';
import { FirmwareService } from './firmware.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([FirmwareRepository])
  ],
  controllers: [FirmwareController],
  providers: [FirmwareService],
})
export class FirmwareModule {}