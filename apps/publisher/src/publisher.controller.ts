import { Body, Controller, Get, HttpCode, Post } from '@nestjs/common';
import { PublisherRequestBody as ProducerRequestBody } from './publisher.dto';
import { PublisherService } from './publisher.service';

@Controller()
export class PublisherController {
  constructor(private readonly publisherService: PublisherService) {}

  @Get()
  health(): { message: string } {
    return this.publisherService.health();
  }

  @Post('/produce')
  @HttpCode(200)
  async produce(@Body() body: ProducerRequestBody) {
    this.publisherService.produce(body);
    return { message: 'Sent' };
  }
}
