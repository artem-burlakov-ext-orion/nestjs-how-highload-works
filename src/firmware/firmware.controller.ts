import { FirmwareService } from './firmware.service';
import { Controller, Post, Body } from '@nestjs/common';
import { CreateFirmwareDto } from './dto/create-firmware.dto';
import { Firmware } from './firmware.entity';

@Controller('firmware')
export class FirmwareController {
  constructor(private firmwareService: FirmwareService) {}

  @Post()
  createFirmware(@Body() createFirmwareDto: CreateFirmwareDto): Promise<Firmware> {
    return this.firmwareService.createFirmware(createFirmwareDto);
  }
}
