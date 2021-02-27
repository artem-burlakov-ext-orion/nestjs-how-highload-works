import { Module } from "@nestjs/common";
import { TypeOrmModule } from '@nestjs/typeorm';
import { StatsController } from './stats.controller';
import { StatsService } from './stats.service';
import { StatsRepository } from './stats.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([StatsRepository])
  ],
  controllers: [StatsController],
  providers: [StatsService],
})

export class StatsModule {}
