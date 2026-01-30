import { NestFactory } from '@nestjs/core';
import { ProductsMicroserviceModule } from './products-microservice.module';

async function bootstrap() {
  const app = await NestFactory.create(ProductsMicroserviceModule);
  await app.listen(process.env.port ?? 3000);
}
bootstrap();
