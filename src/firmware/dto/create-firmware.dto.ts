export class CreateFirmwareDto {
  ver: string;
  modelId: number;
  mainServer: string;
  alterServer: string;
  dataRoute: string;
  updateRoute: string;
  isActual: boolean;
};
