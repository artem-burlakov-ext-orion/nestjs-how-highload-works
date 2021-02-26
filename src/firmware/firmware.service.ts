import { Injectable, Inject } from "@nestjs/common";
import { FirmwareRepository } from './firmware.repository';
import { InjectRepository } from "@nestjs/typeorm";
import { CreateFirmwareDto } from './dto/create-firmware.dto';
import { Firmware } from './firmware.entity';

@Injectable()
export class FirmwareService {
  constructor(
    @InjectRepository(FirmwareRepository)
    private firmwareRepository: FirmwareRepository
  ) {}

  async createFirmware(createFirmwareDto: CreateFirmwareDto): Promise<Firmware> {
    return this.firmwareRepository.createFirmware(createFirmwareDto);
  }


}