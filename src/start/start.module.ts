import { Module } from '@nestjs/common';
import { StartController } from './start.controller';
import { StartService } from './start.service';

@Module({
  controllers: [StartController],
  providers: [StartService]
})
export class StartModule {}
