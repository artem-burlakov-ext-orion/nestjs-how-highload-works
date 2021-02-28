import { Injectable, HttpService } from '@nestjs/common';
import { defaultOptions, IDefaultOptions } from './default/default-options';

@Injectable()
export class StartService {
  constructor(
    private httpService: HttpService,
    private options: IDefaultOptions = defaultOptions
  ) {}
    
  async makeSensorsAndStartGeneratingData() {
    const { data } = await this.httpService.post(this.options.url, this.options.create).toPromise();
    data.identifiers.map((id) => id.id)
        
      }))
  }
}
