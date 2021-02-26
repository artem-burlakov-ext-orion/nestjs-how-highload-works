import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { StatsRepository } from './stats.repository';

@Injectable()
export class StatsService {
  constructor(
  @InjectRepository(StatsRepository)
  private statsRepository: StatsRepository) {}

  async createStats() {
    
  }

}
