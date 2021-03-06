import { Injectable } from '@nestjs/common';
import {
  AddStuffDTO,
  DeleteStuffDTO,
  StuffDTO,
  UpdateStuffDTO,
} from './stuff.dto';
import { StuffRepository } from './stuff.repository';
@Injectable()
export class StuffService {
  constructor(private stuffRepository: StuffRepository) {}

  async getStuffById(id: string): Promise<StuffDTO> {
    const foundStuff = await this.stuffRepository.findOne(id);
    // let response = '';
    // for (const property in foundStuff) {
    //   response += ` ${property}: ${foundStuff[property]},`;
    // }
    // return response;
    return foundStuff;
  }

  async getAllStuff(): Promise<string> {
    const foundStuff = await this.stuffRepository.findAll();
    let response = 'Sorry, no items are available in this repository.';
    if (foundStuff !== null) {
      response = 'Found stuff:\n';
      foundStuff.map((item, index) => {
        response += `\nItem ${index + 1}: `;
        for (const property in item) {
          response += ` ${property}: ${item[property]},`;
        }
      });
    }
    return response;
  }

  getStuff(query: any): string {
    let response = `Your queries =>`;
    for (const property in query) {
      response += ` ${property}: ${query[property]},`;
    }
    return response;
  }

  async addStuff(body: AddStuffDTO): Promise<string> {
    const id = await this.stuffRepository.create(body.content);
    return `Added new stuff with id: ${id}`;
  }

  async updateStuff(body: UpdateStuffDTO): Promise<string> {
    await this.stuffRepository.update(body.content);
    return `Updated stuff with id: ${body.content.id}`;
  }

  async deleteStuff(body: DeleteStuffDTO): Promise<string> {
    const id = body.content.id;
    await this.stuffRepository.delete(id);
    return `Deleted stuff with id: ${id}`;
  }
}
