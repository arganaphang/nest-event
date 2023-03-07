import { describe, it, expect, beforeEach } from 'vitest';
import { PublisherService } from './publisher.service';

describe('PublisherService', () => {
  let producerController: PublisherService;

  beforeEach(async () => {
    producerController = new PublisherService();
  });

  describe('root', () => {
    it.concurrent(`should return { message: 'OK' }`, () => {
      expect(producerController.health()).toStrictEqual({ message: 'OK' });
    });
  });
});
