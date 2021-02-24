import { IsNotEmpty } from 'class-validator';

export class CreateModelDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  measurand: string;

  @IsNotEmpty()
  min: number;

  @IsNotEmpty()
  max: number;

  @IsNotEmpty()
  warranty: number;
}
