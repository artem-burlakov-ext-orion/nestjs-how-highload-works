import { SensorStatus } from '../sensor-status.enum';
import { IsOptional, IsIn } from 'class-validator';

export class GetSensorsFilterDto {
  @IsOptional()
  @IsIn([SensorStatus.STORED, SensorStatus.INSTALLED, SensorStatus.ACTIVE, SensorStatus.INVALID])
  status: SensorStatus;
}
