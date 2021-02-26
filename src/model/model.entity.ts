import { Entity, BaseEntity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { ModelMeasurand } from './model-measurand.enum';
import { Firmware } from '../firmware/firmware.entity';

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

  @OneToMany(type => Firmware, firmware => firmware.model)
  firmwares: Firmware[];
}