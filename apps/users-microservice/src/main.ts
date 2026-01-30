import { NestFactory } from '@nestjs/core';
import { UsersMicroserviceModule } from './users-microservice.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(UsersMicroserviceModule, {
    transport: Transport.TCP,
    options: {
      host: '127.0.0.1',
      port: 3001,
    },
  });
  await app.listen();
  console.log(`Users microservice is running on port 3001`);

}
bootstrap();
