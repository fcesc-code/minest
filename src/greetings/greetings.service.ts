import { Injectable } from '@nestjs/common';

@Injectable()
export class GreetingsService {
  getHello(): string {
    return 'Hello World!';
  }

  getBye(): string {
    return 'Bye World!';
  }

  greet(name: string): string {
    return `Welcome back, ${name}!`;
  }

  greetWithAge(name: string, age: number): string {
    return `Welcome back, ${name}! You are already ${age}, old rascal.`;
  }
}
