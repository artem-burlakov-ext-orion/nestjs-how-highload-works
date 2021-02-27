import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { StatsRepository } from './stats.repository';
import { CreateStatsDto } from './dto/create-stats.dto';
import { Stats } from './stats.entity';

@Injectable()
export class StatsService {
  constructor(
  @InjectRepository(StatsRepository)
  private statsRepository: StatsRepository) {}

  async createStats(createStatsDto: CreateStatsDto): Promise<Stats> {
    const stats = await this.statsRepository.createStats(createStatsDto);
    return stats;
  }
}
