import { Repository, EntityRepository } from "typeorm";
import { Stats } from './stats.entity';
import { CreateStatsDto } from './dto/create-stats.dto';

@EntityRepository(Stats)
export class StatsRepository extends Repository<Stats> {
  async createStats(createStatsDto: CreateStatsDto): Promise<Stats> {
    const { sn, value, fw, addr } = createStatsDto;
    const stats = new Stats();
    stats.sn = sn;
    stats.temp = value;
    stats.fw = fw;
    stats.addr = addr;
    await stats.save();
    return stats;
  }
}
