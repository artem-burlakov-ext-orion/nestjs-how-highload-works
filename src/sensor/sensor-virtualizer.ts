import { Injectable, HttpService } from '@nestjs/common';

@Injectable()
export class SensorVirtualizer {
  constructor(private httpService: HttpService) {}
  
  genData() {
    return {
      sn: 'xxx',
      fw: 'yyy',
      addr: 'zzz',
      value: 50,
    }
  }

  async sendData() {
    await this.httpService.post('http://localhost:3000/data',this.genData())
  }
}
