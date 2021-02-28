import { EntityRepository, Repository, InsertResult } from "typeorm";
import { Sensor } from './sensor.entity';
import { CreateSensorDto } from './dto/create-sensor.dto';
import { v4 as uuid} from 'uuid';
import { GetSensorsFilterDto } from './dto/get-sensors-filter.dto';
import { SensorStatus } from './sensor-status.enum';

const makeSensor = (modelId: number, status: SensorStatus): Sensor => {
  // const sensor = new Sensor();  default values from entity dont work??
  const sensor = new Sensor();
  sensor.model_id = modelId;
  sensor.sn = uuid();
  sensor.status = status;
  return sensor;
};

const makeSensors = (createSensorDto: CreateSensorDto): Sensor[] => {
  const { count, modelId, status } = createSensorDto;
  let rows: Sensor[] = [];
  while (rows.length !== count) {
    rows = [...rows, makeSensor(modelId, status)];
  }
  return rows;
};

@EntityRepository(Sensor)
export class SensorRepository extends Repository<Sensor> {
  async getSensors(filterDto: GetSensorsFilterDto): Promise<Sensor[]> {
    const { status } = filterDto;
    const query = this.createQueryBuilder('sensor');
    // if (model_id) {
    //   query.andWhere('sensor.model_id = :model_id', { model_id });
    // }
    if (status) {
      query.andWhere('sensor.status = :status', { status });
    }
    const sensors = await query.getMany();
    return sensors;
  }

  async createMassSensor(createSensorDto: CreateSensorDto): Promise<InsertResult> {
    const rows = makeSensors(createSensorDto);
    const query = this.createQueryBuilder('sensor')
    .insert()
    .values(rows);
    const sensors = await query.execute()
    // identifiers: [ { id: 29 }, { id: 30 }, { id: 31 } ],
    return sensors;
  }
 
}
