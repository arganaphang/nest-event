import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { KafkaModule } from './kafka/kafka.module';
import { ProducerService } from './kafka/producer.service';
import { PublisherController } from './publisher.controller';
import { PublisherService } from './publisher.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    KafkaModule,
  ],
  controllers: [PublisherController],
  providers: [PublisherService, ProducerService],
})
export class PublisherModule {}
