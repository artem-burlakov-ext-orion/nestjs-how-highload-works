import { Repository, EntityRepository } from "typeorm";
import { Sensor_stats } from './stats.entity';
import { CreateStatsDto } from './dto/create-stats.dto';

@EntityRepository(Sensor_stats)
export class StatsRepository extends Repository<Sensor_stats> {
  async createStats(createStatsDto: CreateStatsDto): Promise<Sensor_stats> {
    const { sn, value, fw, addr } = createStatsDto;
    const stats = new Sensor_stats();
    stats.sn = sn;
    stats.temp = value;
    stats.fw = fw;
    stats.addr = addr;
    await stats.save();
    return stats;
  }
}
