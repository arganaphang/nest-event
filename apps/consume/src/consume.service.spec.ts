import { ConfigService } from '@nestjs/config';
import { describe, it, expect, beforeEach } from 'vitest';
import { ConsumeService } from './consume.service';
import { ConsumerService } from './kafka/consumer.service';

describe('consumeService', () => {
  let consumerController: ConsumeService;

  beforeEach(async () => {
    consumerController = new ConsumeService(
      new ConfigService(),
      new ConsumerService(new ConfigService()),
    );
  });

  describe('root', () => {
    it.concurrent(`should return { message: 'OK' }`, () => {
      expect(consumerController.health()).toStrictEqual({ message: 'OK' });
    });
  });
});
