import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { StuffService } from './stuff.service';
import {
  AddStuffDTO,
  DeleteStuffDTO,
  StuffDTO,
  UpdateStuffDTO,
} from './stuff.dto';

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
  async getStuffById(@Param('id') id: string): Promise<StuffDTO> {
    const stuff = await this.stuffService.getStuffById(id);
    if (!stuff) {
      throw new NotFoundException('Stuff not found.');
    }
    return stuff;
  }

  @Post('')
  async addStuff(@Body() body: AddStuffDTO): Promise<string> {
    return await this.stuffService.addStuff(body);
  }

  @Put('')
  async updateStuff(@Body() body: UpdateStuffDTO): Promise<string> {
    return await this.stuffService.addStuff(body);
  }

  @Delete('')
  async deleteStuff(@Body() body: DeleteStuffDTO): Promise<string> {
    return await this.stuffService.deleteStuff(body);
  }
}
