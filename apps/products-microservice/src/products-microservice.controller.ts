import { Controller, Get } from '@nestjs/common';
import { ProductsMicroserviceService } from './products-microservice.service';

@Controller()
export class ProductsMicroserviceController {
  constructor(private readonly productsMicroserviceService: ProductsMicroserviceService) {}

  @Get()
  getHello(): string {
    return this.productsMicroserviceService.getHello();
  }
}
