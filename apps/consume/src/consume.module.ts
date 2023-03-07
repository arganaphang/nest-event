import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ConsumerController } from './consume.controller';
import { ConsumeService } from './consume.service';
import { ConsumerService } from './kafka/consumer.service';
import { KafkaModule } from './kafka/kafka.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    KafkaModule,
  ],
  controllers: [ConsumerController],
  providers: [ConsumeService, ConsumerService],
})
export class ConsumerModule {}
