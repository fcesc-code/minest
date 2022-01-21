import { Module } from '@nestjs/common';
import { StuffController } from './stuff.controller';
import { StuffService } from './stuff.service';

@Module({
  controllers: [StuffController],
  providers: [StuffService],
})
export class StuffModule {}
