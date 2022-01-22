import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { StuffService } from './stuff.service';
import { AddStuffDTO } from './stuff.dto';

@Controller('stuff')
export class StuffController {
  constructor(private readonly stuffService: StuffService) {}

  @Get(`what`)
  getStuff(@Query() query): string {
    return this.stuffService.getStuff(query);
  }

  @Get('')
  async getAllStuff(): Promise<string> {
    return await this.stuffService.getAllStuff();
  }

  @Get('id/:id')
  async getStuffById(@Param('id') id: string): Promise<string> {
    return await this.stuffService.getStuffById(id);
  }

  @Post(`add`)
  async addStuff(@Body() body: AddStuffDTO): Promise<string> {
    return await this.stuffService.addStuff(body);
  }
}
