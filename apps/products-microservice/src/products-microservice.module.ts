import { Module } from '@nestjs/common';
import { ProductsMicroserviceController } from './products-microservice.controller';
import { ProductsMicroserviceService } from './products-microservice.service';

@Module({
  imports: [],
  controllers: [ProductsMicroserviceController],
  providers: [ProductsMicroserviceService],
})
export class ProductsMicroserviceModule {}
