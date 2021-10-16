import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
   return '<center><h1>Use postman, this project is not have a ui!</h1></center>'
  }
}
