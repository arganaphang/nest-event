import { Injectable, OnModuleInit } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { ConsumerService } from './kafka/consumer.service';

@Injectable()
export class ConsumeService implements OnModuleInit {
  constructor(
    private readonly configService: ConfigService,
    private readonly consumeService: ConsumerService,
  ) {}
  health(): { message: string } {
    return { message: 'OK' };
  }

  async onModuleInit() {
    await this.consumeService.consume(
      {
        topics: [this.configService.get<string>('KAFKA_TOPIC_REQUEST')],
      },
      {
        eachMessage: async (payload) => {
          console.log(`DATA ${payload.message.value.toString()}`);
        },
      },
    );
  }
}
