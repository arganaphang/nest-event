import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { PublisherModule } from './publisher.module';

async function bootstrap() {
  const app = await NestFactory.create(PublisherModule);
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(8002);
}
bootstrap();
