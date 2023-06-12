import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async getHello(): Promise<string> {
    return this.appService.getHello();
  }

  @Get('/new/:symbol')
  async anotherEndpoint(@Param() params: any) {
    return this.appService.anotherEndpoint(params.symbol);
  }
}
