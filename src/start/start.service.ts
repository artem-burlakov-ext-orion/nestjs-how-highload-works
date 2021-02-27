import { Injectable } from '@nestjs/common';
import { MetadataAlreadyExistsError } from 'typeorm';

@Injectable()
export class StartService {
  private url: string = 'http://localhost:3000/sensor';
  private startOptions = {
    modelId: 1,
    status: 'installed',
    count: 1000,
  };
  
  async start() {
    axios.post(this.url, this.startOptions)
      .then(() => axios.get('http://localhost/3000/sensor', {
        status: 'installed',
      }))
      .then((installed) => installed.forEach((s) => {
        
      }))
  }
}
