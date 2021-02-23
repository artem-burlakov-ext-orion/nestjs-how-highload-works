import { Controller, Post } from '@nestjs/common';
import { CreateFirmwareDto } from './dto/create-firmware.dto';
import { FirmwareService } from './firmware.service';

@Controller('firmware')
export class FirmwareController {
  constructor(private firmwareService: FirmwareService) {}

  @Post()
  createFirmware(createFirmwareDto: CreateFirmwareDto) {
    return this.firmwareService.createFirmware(createFirmwareDto);
  }


}
