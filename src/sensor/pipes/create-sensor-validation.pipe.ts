import { PipeTransform, BadRequestException } from "@nestjs/common";
import { SensorStatus } from '../sensor-status.enum';

export class CreateSensorValidationPipe implements PipeTransform {
  readonly allowedStatuses = Object.values(SensorStatus);

  private isStatusValid(status: any): boolean {
    return this.allowedStatuses.indexOf(status) !== -1;
  }

  transform(value: any) {
    if (!this.isStatusValid(value.status)) {
      throw new BadRequestException(`'${value.status}' is uknown status`);
    }
    value.count = Number(value.count);
    value.modelId = Number(value.modelId);
    return value;
  }
}
