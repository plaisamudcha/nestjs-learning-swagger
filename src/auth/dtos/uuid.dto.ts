import { ApiProperty } from '@nestjs/swagger';

export class UuidDto {
  @ApiProperty({})
  id: string;
}
