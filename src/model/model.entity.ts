import { Entity, BaseEntity, PrimaryGeneratedColumn, Column } from "typeorm";
import { ModelMeasurand } from './model-measurand.enum';

@Entity()
export class Model extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  measurand: ModelMeasurand;

  @Column()
  min: number;

  @Column()
  max: number;

  @Column()
  warranty: number;
}