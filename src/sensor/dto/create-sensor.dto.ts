import { SensorStatus } from '../sensor-status.enum';

export class CreateSensorDto {
  modelId: number;
  status: SensorStatus;
  count: number;
}
