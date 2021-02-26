export class CreateFirmwareDto {
  ver: string;
  model_id: number;
  main_server: string;
  alter_server: string;
  data_route: string;
  update_route: string;
  is_actual: boolean;
};
