import { Controller, Get } from '@nestjs/common';
import { StartService } from './start.service';

@Controller('start')
export class StartController {
  // constructor(private startService: StartService) {}

  //   @Get()
  //   makeSensorsAndStartGeneratingData() {
  //     return this.startService.makeSensorsAndStartGeneratingData();
  //   }
}
