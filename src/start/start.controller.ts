import { Controller, Get } from '@nestjs/common';

@Controller('start')
export class StartController {
  constructor(private startService: StartService) {}

    @Get()
    start() {
      return this.startService.start();
    }

  
}
