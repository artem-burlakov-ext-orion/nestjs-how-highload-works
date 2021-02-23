export class CreateSensorDto {
  id: number;
  sn: string;
  firmware_id: number;
  status: SensorStatus;
}

export enum SensorStatus {
  STORED = 'STORED',
  INSTALLED = 'INSTALLED',
  ACTIVE = 'ACTIVE',
  INVALID_FIRMWARE = 'INVALID_FIRMWARE',
  INVALID = 'INVALID',
}