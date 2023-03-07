import { IsNotEmpty, IsString } from 'class-validator';

export class PublisherRequestBody {
  @IsNotEmpty()
  @IsString()
  message: string;
}
