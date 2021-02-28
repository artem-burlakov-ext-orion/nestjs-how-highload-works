import { CreateSensorDto } from '../../sensor/dto/create-sensor.dto';
import { SensorStatus } from 'src/sensor/sensor-status.enum';

export interface IDefaultOptions {
  create: CreateSensorDto;
  url: string;
}

export const defaultOptions: IDefaultOptions = {
  create: {
    modelId: 1,
    status: SensorStatus.INSTALLED,
    count: 1000,
  },
  url: 'http://localhost:3000/sensor',
}
