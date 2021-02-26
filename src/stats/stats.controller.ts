import { Controller, Post } from '@nestjs/common';


@Controller('stats')
export class StatsController {
  constructor(private statsService: StatsService) {}

  @Post()
  createStats(@Body createStatsDto: CreateStatsDto) {
    return this.statsService()
  }
  
}
