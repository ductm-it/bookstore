import { NestFactory } from '@nestjs/core';
import { UsersMicroserviceModule } from './users-microservice.module';

async function bootstrap() {
  const app = await NestFactory.create(UsersMicroserviceModule);
  await app.listen(process.env.port ?? 3000);
}
bootstrap();
