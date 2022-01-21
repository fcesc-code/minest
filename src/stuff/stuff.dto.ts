import { ApiProperty } from '@nestjs/swagger';

export class AddStuffDTO {
  @ApiProperty()
  readonly content: {
    readonly name: string;
    readonly description: string;
    readonly category: string;
  };
}
