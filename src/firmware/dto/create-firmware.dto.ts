export class CreateFirmwareDto {
  version: string;
  main_server: string;
  alter_server: string;
  push_route: string;
  is_actual: boolean;
};
