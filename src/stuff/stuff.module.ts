import { Module } from '@nestjs/common';
import { StuffController } from './stuff.controller';
import { StuffRepository } from './stuff.repository';
import { StuffService } from './stuff.service';

@Module({
  controllers: [StuffController],
  providers: [StuffService, StuffRepository],
})
export class StuffModule {}
