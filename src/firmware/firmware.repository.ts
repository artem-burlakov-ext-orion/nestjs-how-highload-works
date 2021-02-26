import { Firmware } from './firmware.entity';
import { Repository, EntityRepository } from 'typeorm';
import { CreateFirmwareDto } from './dto/create-firmware.dto';

@EntityRepository(Firmware)
export class FirmwareRepository extends Repository<Firmware> {
  async createFirmware(createFirmwareDto: CreateFirmwareDto): Promise<Firmware> {
    const {
      model_id,
      ver,
      main_server,
      alter_server,
      data_route,
      update_route,
      is_actual,
     } = createFirmwareDto;
    const firmware = new Firmware();
    firmware.model_id = model_id;
    firmware.ver = ver;
    firmware.main_server = main_server;
    firmware.alter_server = alter_server;
    firmware.data_route = data_route;
    firmware.update_route = update_route;
    firmware.is_actual = is_actual;
    await firmware.save();
    return firmware;
  }
}
