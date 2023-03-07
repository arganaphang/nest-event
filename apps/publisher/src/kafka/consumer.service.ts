import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import {
  Consumer,
  ConsumerRunConfig,
  ConsumerSubscribeTopics,
  Kafka,
  ProducerRecord,
} from 'kafkajs';

@Injectable()
export class ConsumerService {
  private kafka: Kafka;
  private consumer: Consumer;

  constructor(private configService: ConfigService) {
    this.kafka = new Kafka({
      brokers: [this.configService.get<string>('KAFKA_HOST')],
    });
    this.consumer = this.kafka.consumer({
      groupId: this.configService.get<string>('KAFKA_CONSUMER_ID'),
    });
  }

  async consume(topic: ConsumerSubscribeTopics, config: ConsumerRunConfig) {
    await this.consumer.subscribe(topic);
    await this.consumer.run(config);
  }

  async onModuleInit() {
    await this.consumer.connect();
  }

  async onApplicationShutdown() {
    await this.consumer.disconnect();
  }
}
