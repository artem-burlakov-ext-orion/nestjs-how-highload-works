import { Repository, EntityRepository } from "typeorm";
import { Model } from './model.entity';
import { CreateModelDto } from './dto/create-model.dto';
import { ModelMeasurand } from './model-measurand.enum';

@EntityRepository(Model)
export class ModelRepository extends Repository<Model> {
  async createModel(createModelDto: CreateModelDto): Promise<Model> {
    const { name, measurand, min, max } = createModelDto;
    const model = new Model();
    model.name = name;
    model.measurand = ModelMeasurand[measurand];
    model.min = min;
    model.max = max;

    await model.save();
    return model;
  }




}