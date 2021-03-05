import { Injectable, HttpService } from '@nestjs/common';
import { MockFactory } from 'mockingbird-ts';
import { FakeValue } from './sensor-fake-data';

@Injectable()
export class SensorVirtualizer {
  constructor(private httpService: HttpService) {}

  genData(sensor) {
    const { value } = MockFactory.create<FakeValue>(FakeValue);
    const { sn } = sensor;
    return {
      sn,
      fw: '0.0.1', //will be relation
      value,
      }
  }

  async sendData(data) {
    await this.httpService.post('http://localhost:3000/stats', { ...data }).toPromise()
  }
}
