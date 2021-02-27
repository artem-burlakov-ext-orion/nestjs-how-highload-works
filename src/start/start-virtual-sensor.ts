export class VirtualSensor {
  constructor(data) {
    this.sn = data.sn;
    this.firmware = data.firmware;
  }

  genData() {
    return {
      sn: this.sn,
      fw: this.firmware.ver,
      addr: faker.address.city(),
      temp: faker.random.number({ min: 50, max: 53 }),
    };
  }

  async sendData(self) {
    const { mainServer, route } = self.firmware;
    const url = `${mainServer}${route}`;
    await axios.post(url, { ...self.genData() });
  }

  start() {
    const self = this;
    let timerId = setInterval(() => this.sendData(self), 10000);
    setTimeout(() => clearInterval(timerId), 101000);
  }
}
