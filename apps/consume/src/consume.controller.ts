import { Controller, Get } from '@nestjs/common';
import { ConsumeService } from './consume.service';

@Controller()
export class ConsumerController {
  constructor(private readonly consumeService: ConsumeService) {}

  @Get()
  health(): { message: string } {
    return this.consumeService.health();
  }
}
