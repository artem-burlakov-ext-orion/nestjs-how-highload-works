import { EntityRepository, Repository } from "typeorm";
import { Sensor } from './sensor.entity';
import { CreateSensorDto } from './dto/create-sensor.dto';
import { v4 as uuid} from 'uuid';
import { GetSensorsFilterDto } from './dto/get-sensors-filter.dto';
import { SensorStatus } from './sensor-status.enum';

const makeSensor = (modelId: number, status: SensorStatus = SensorStatus.STORED): Record<string, any> => ({
  // const sensor = new Sensor();  default values from entity dont work??
  model_id: modelId,
  sn: uuid(),
  status,
});

const makeSensors = (modelId: number, count: number): Record<string, any>[] => {
  let rows = [];
  while (rows.length !== count) {
    rows = [...rows, makeSensor(modelId)];
  }
  return rows;
};

@EntityRepository(Sensor)
export class SensorRepository extends Repository<Sensor> {

  async getSensors(filterDto: GetSensorsFilterDto): Promise<Sensor[]> {
    const { model_id, status } = filterDto;
    const query = this.createQueryBuilder('sensor');
    if (model_id) {
      query.andWhere('sensor.model_id = :model_id', { model_id });
    }
    if (status) {
      query.andWhere('sensor.status = :status', { status });
    }
    const sensors = await query.getMany();
    return sensors;
  }

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