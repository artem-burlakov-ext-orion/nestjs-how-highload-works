import { Firmware } from './firmware.entity';
import { Repository, EntityRepository } from 'typeorm';
import { CreateFirmwareDto } from './dto/create-firmware.dto';

@EntityRepository(Firmware)
export class FirmwareRepository extends Repository<Firmware> {
  async createFirmware(createFirmwareDto: CreateFirmwareDto): Promise<Firmware> {
    const {
      modelId,
      ver,
      mainServer,
      alterServer,
      dataRoute,
      updateRoute,
      isActual,
     } = createFirmwareDto;
    const firmware = new Firmware();
    firmware.model_id = modelId;
    firmware.ver = ver;
    firmware.main_server = mainServer;
    firmware.alter_server = alterServer;
    firmware.data_route = dataRoute;
    firmware.update_route = updateRoute;
    firmware.is_actual = isActual;
    await firmware.save();
    return firmware;
  }
}
