import { Mock } from 'mockingbird-ts';

export class FakeValue {
  @Mock(faker => faker.random.number({ min: 50, max: 55}))
  readonly value: number;
}

export class FakeAddress {
  @Mock(faker => faker.address.city())
  readonly address: string;
}
