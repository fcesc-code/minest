import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { StuffService } from './stuff.service';
import { AddStuffDTO } from './stuff.dto';

@Controller('stuff')
export class StuffController {
  constructor(private readonly stuffService: StuffService) {}

  @Get(`what`)
  getStuff(@Query() query): string {
    return this.stuffService.getStuff(query);
  }

  @Post(`add`)
  addStuff(@Body() body: AddStuffDTO): string {
    return this.stuffService.addStuff(body);
  }
}
