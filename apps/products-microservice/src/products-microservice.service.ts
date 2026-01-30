import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductsMicroserviceService {
  getHello(): string {
    return 'Hello World!';
  }
}
