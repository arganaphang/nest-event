import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { ConsumerModule as ConsumeModule } from './consume.module';

async function bootstrap() {
  const app = await NestFactory.create(ConsumeModule);
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(8001);
}
bootstrap();
