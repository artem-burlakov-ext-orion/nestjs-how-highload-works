import { Controller, Post, Body } from '@nestjs/common';
import { StatsService } from './stats.service';
import { CreateStatsDto } from './dto/create-stats.dto';
import { Sensor_stats } from './stats.entity';

@Controller('stats')
export class StatsController {
  constructor(private statsService: StatsService) {}

  @Post()
  createStats(@Body() createStatsDto: CreateStatsDto): Promise<Sensor_stats> {
    return this.statsService.createStats(createStatsDto);
  }
}
