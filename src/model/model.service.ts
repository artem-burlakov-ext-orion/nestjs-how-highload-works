import { Injectable } from '@nestjs/common';
import { ModelRepository } from './model.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateModelDto } from './dto/create-model.dto';
import { Model } from './model.entity';

@Injectable()
export class ModelService {
  constructor(
    @InjectRepository(ModelRepository)
    private modelRepository: ModelRepository,
  ) {}

  async createModel(createModelDto: CreateModelDto): Promise<Model> {
    return this.modelRepository.createModel(createModelDto);
  }
  
    
}

