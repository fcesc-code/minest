import { ApiProperty } from '@nestjs/swagger';

export class AddStuffDTO {
  @ApiProperty()
  readonly content: {
    readonly name: string;
    readonly description: string;
    readonly category: string;
  };
}

export class CreateStuffDTO {
  @ApiProperty()
  readonly name: string;
  @ApiProperty()
  readonly description: string;
  @ApiProperty()
  readonly category: string;
}

export class StuffDTO extends CreateStuffDTO {
  @ApiProperty()
  id: string;
}
