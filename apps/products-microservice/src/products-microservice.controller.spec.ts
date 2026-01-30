import { Test, TestingModule } from '@nestjs/testing';
import { ProductsMicroserviceController } from './products-microservice.controller';
import { ProductsMicroserviceService } from './products-microservice.service';

describe('ProductsMicroserviceController', () => {
  let productsMicroserviceController: ProductsMicroserviceController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [ProductsMicroserviceController],
      providers: [ProductsMicroserviceService],
    }).compile();

    productsMicroserviceController = app.get<ProductsMicroserviceController>(ProductsMicroserviceController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(productsMicroserviceController.getHello()).toBe('Hello World!');
    });
  });
});
