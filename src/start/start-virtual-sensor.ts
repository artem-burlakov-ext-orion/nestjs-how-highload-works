import { MockFactory } from 'mockingbird-ts';
import { FakeDataFromSensor } from './fake-sensor-data';

export class VirtualSensor {
  // constructor(data) {
  //   this.sn = data.sn;
  //   this.firmware = data.firmware;
  // }

  // genData() {
  //   return MockFactory.create<FakeDataFromSensor>(FakeDataFromSensor);
  // }

  // async sendData(self) {
  //   const { mainServer, route } = self.firmware;
  //   const url = `${mainServer}${route}`;
  //   await axios.post(url, { ...self.genData() });
  // }

  // start() {
  //   const self = this;
  //   let timerId = setInterval(() => this.sendData(self), 10000);
  //   setTimeout(() => clearInterval(timerId), 101000);
  // }
}
