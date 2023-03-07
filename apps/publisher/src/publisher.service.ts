import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { RecordMetadata } from 'kafkajs';
import { ProducerService } from './kafka/producer.service';
import { PublisherRequestBody } from './publisher.dto';

@Injectable()
export class PublisherService {
  constructor(
    private configService: ConfigService,
    private producerService: ProducerService,
  ) {}

  async produce(body: PublisherRequestBody) {
    this.producerService.produce({
      topic: this.configService.get<string>('KAFKA_TOPIC_REQUEST'),
      messages: [
        {
          key: 'data',
          value: body.message,
        },
      ],
    });
  }
  health(): { message: string } {
    return { message: 'OK' };
  }
}
