import { Injectable } from '@nestjs/common';
import { AddStuffDTO } from './stuff.dto';
@Injectable()
export class StuffService {
  getStuff(query: any): string {
    let response = `Your queries =>`;
    for (const property in query) {
      response += ` ${property}: ${query[property]},`;
    }
    return response;
  }

  addStuff(body: AddStuffDTO): string {
    let response = `Your body =>`;
    for (const property in body.content) {
      response += ` ${property}: ${body.content[property]},`;
    }
    return response;
  }
}
