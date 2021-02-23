import { Injectable } from '@nestjs/common';
import { CreateFirmwareDto } from './dto/create-firmware.dto';

@Injectable()
export class FirmwareService {
  async createFirmware(createFirmwareDto: CreateFirmwareDto) {
        
  }
}
