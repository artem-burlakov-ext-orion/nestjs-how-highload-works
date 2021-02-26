import { Repository, EntityRepository } from "typeorm";
import { Stats } from './stats.entity';

@EntityRepository(Stats)
export class StatsRepository extends Repository<Stats> {

}