import { readFile, writeFile } from 'fs/promises';
import { CreateStuffDTO, StuffDTO } from './stuff.dto';
import { v4 as uuid } from 'uuid';
import { Injectable } from '@nestjs/common';

@Injectable()
export class StuffRepository {
  private async readData(): Promise<StuffDTO[]> {
    const contents = await readFile('./mockdata/stuff.mock.json', 'utf8');
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const stuff: StuffDTO[] = JSON.parse(contents);
    return stuff;
  }

  private async writeData(data: any): Promise<void> {
    await writeFile('./mockdata/stuff.mock.json', JSON.stringify(data));
  }
  async findOne(id: string): Promise<StuffDTO | null> {
    const data = await this.readData();
    const result = data.filter((element) => element.id === id);
    return result.length > 0 ? result[0] : null;
  }

  async findAll(): Promise<StuffDTO[]> {
    const data = await this.readData();
    return data;
  }

  // async query(query: any) {

  // }

  async update(updatedStuff: StuffDTO): Promise<string> {
    const data = await this.readData();
    const updatedData = [...data].map((element) => {
      return element.id === updatedStuff.id ? updatedStuff : element;
    });
    await this.writeData(updatedData);
    return;
  }

  async create(newStuff: CreateStuffDTO): Promise<string> {
    const data = await this.readData();
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    const newId = String(uuid());
    const newElement = { ...newStuff, id: newId };
    const newData: StuffDTO[] = [...data, newElement];
    await this.writeData(newData);
    return newId;
  }

  async delete(id: string): Promise<void> {
    const data = await this.readData();
    const newData = data.filter((element) => element.id !== id);
    await this.writeData(newData);
    return;
  }
}
