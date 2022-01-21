import { Module } from '@nestjs/common';
import { GreetingsModule } from './greetings/greetings.module';
import { StuffModule } from './stuff/stuff.module';

@Module({
  imports: [GreetingsModule, StuffModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
