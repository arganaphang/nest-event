import { describe, it, expect, beforeEach } from 'vitest';
import { AppService } from './app.service';

describe('AppService', () => {
  let appService: AppService;

  beforeEach(async () => {
    appService = new AppService();
  });

  describe('root', () => {
    it.concurrent(`should return { message: 'OK' }`, () => {
      expect(appService.health()).toStrictEqual({ message: 'OK' });
    });
  });
});
