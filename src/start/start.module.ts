import { Module, HttpModule } from '@nestjs/common';
import { StartController } from './start.controller';
import { StartService } from './start.service';

@Module({
  imports: [HttpModule],
  controllers: [StartController],
  providers: [StartService]
})
export class StartModule {}
