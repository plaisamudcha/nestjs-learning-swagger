import { ApiPropertyOptional } from '@nestjs/swagger';

export class UserQueryDto {
  @ApiPropertyOptional()
  age?: number;
}
