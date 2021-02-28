import { Mock } from 'mockingbird-ts';

export class FakeDataFromSensor {
  @Mock(faker => faker.address.city())
  readonly addr: string;

  @Mock(faker => faker.random.number({ min: 50, max: 55}))
  readonly value: number;
}