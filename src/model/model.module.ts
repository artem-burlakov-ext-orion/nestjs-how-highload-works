import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ModelRepository } from './model.repository';
import { ModelController } from './model.controller';
import { ModelService } from './model.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([ModelRepository])
  ],
  controllers: [ModelController],
  providers: [ModelService],
})
export class ModelModule {}
