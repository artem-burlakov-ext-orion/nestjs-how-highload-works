import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm";
import { Model } from '../model/model.entity';

@Entity()
export class Firmware extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  model_id: number;

  @ManyToOne(type => Model, model => model.firmwares)
  @JoinColumn({ name: 'model_id'})
  model: Model;

  @Column('string', { length: 64 })
  ver: string;

  @Column('string', { length: 64 })
  main_server: string;

  @Column('string', { length: 64 })
  alter_server: string;

  @Column('string', { length: 32 })
  data_route: string;

  @Column('string', { length: 32 })
  update_route: string;

  @Column()
  is_actual: boolean;
}
