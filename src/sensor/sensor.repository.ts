import { EntityRepository, Repository } from "typeorm";
import { Sensor } from './sensor.entity';
import { CreateSensorDto } from './dto/create-sensor.dto';
import { v4 as uuid} from 'uuid';

const makeSensor = (modelId: number): Object => ({
    model_id: modelId,
    sn: uuid(),
  });

const makeSensors = (modelId, count): Object[] => {
  let rows = [];
  while (rows.length !== count) {
    rows.push(makeSensor(modelId));
  }
  return rows;
};

@EntityRepository(Sensor)
export class SensorRepository extends Repository<Sensor> {
  async createMassSensor(createSensorDto: CreateSensorDto): Promise<number> {
    const { model_id, count } = createSensorDto;
    const rows = makeSensors(model_id, count);
    const query = this.createQueryBuilder('sensor')
    .insert()
    .values(rows);
    const sensors = await query.execute()
    return sensors.identifiers.length;

  }


}