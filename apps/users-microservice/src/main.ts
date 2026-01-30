import { NestFactory } from '@nestjs/core';
import { UsersMicroserviceModule } from './users-microservice.module';
import { Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.createMicroservice(UsersMicroserviceModule, {
    transport: Transport.TCP,
    port: 3001,
  });
  await app.listen();
}
bootstrap();
