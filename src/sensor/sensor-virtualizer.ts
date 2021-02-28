import { Injectable, HttpService } from '@nestjs/common';
import { MockFactory } from 'mockingbird-ts';
import { FakeDataFromSensor } from './sensor-fake-data';

@Injectable()
export class SensorVirtualizer {
  constructor(private httpService: HttpService) {}
  
  genData(sensor) {
    return {
      sn: sensor.sn,
      fw: '0.0.1', //will be relation
      ...MockFactory.create<FakeDataFromSensor>(FakeDataFromSensor)
    }
  }

  async sendData(sensor) {
    console.log('THIS: ', this);
    await this.httpService.post('http://localhost:3000/stats', { ...this.genData(sensor) }).toPromise()
  }
}
