import { BaseEntity, Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Sensor_stats extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column('varchar', { length: 64 })
  sn: string;

  @Column('varchar', { length: 64 })
  fw: string;

  @Column('varchar', { length: 100 })
  addr: string;

  @Column()
  temp: number;
}
