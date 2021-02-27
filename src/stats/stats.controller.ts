import { Controller, Post, Body } from '@nestjs/common';
import { StatsService } from './stats.service';
import { CreateStatsDto } from './dto/create-stats.dto';



@Controller('stats')
export class StatsController {
  constructor(private statsService: StatsService) {}

  @Post()
  createStats(@Body() createStatsDto: CreateStatsDto) {
    return this.statsService
  }
  
}
