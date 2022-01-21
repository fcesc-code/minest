import { Controller, Get, Param } from '@nestjs/common';
import { GreetingsService } from './greetings.service';

@Controller('greetings')
export class GreetingsController {
  constructor(private readonly greetingsService: GreetingsService) {}

  @Get(`hi`)
  getHello(): string {
    return this.greetingsService.getHello();
  }

  @Get(`bye`)
  getBye(): string {
    return this.greetingsService.getBye();
  }

  @Get(`greet/:name`)
  greet(@Param('name') name: string): string {
    return this.greetingsService.greet(name);
  }

  @Get(`greet/:name/:age`)
  greetWithAge(@Param('name') name: string, @Param('age') age: number): string {
    return this.greetingsService.greetWithAge(name, age);
  }
}
