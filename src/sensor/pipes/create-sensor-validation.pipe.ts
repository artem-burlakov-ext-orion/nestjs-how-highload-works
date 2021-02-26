import { PipeTransform, BadRequestException } from "@nestjs/common";

export class CreateSensorValidationPipe implements PipeTransform {
  transform(value: any) {
    value.count = Number(value.count);
    value.modelId = Number(value.modelId);
    return value;
  }
}