import { Controller, Post, Body, UsePipes, ValidationPipe } from '@nestjs/common';
import { ModelService } from './model.service';
import { CreateModelDto } from './dto/create-model.dto';
import { Model } from './model.entity';

@Controller('model')
export class ModelController {
  constructor(private modelService: ModelService) {}

  @Post()
  @UsePipes(ValidationPipe)
  createModel(@Body() createModelDto: CreateModelDto): Promise<Model> {
    return this.modelService.createModel(createModelDto);
  }
}
