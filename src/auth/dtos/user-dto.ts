import { ApiProperty } from '@nestjs/swagger';

export class UserDto {
  @ApiProperty()
  id: string;

  @ApiProperty()
  username: string;

  @ApiProperty()
  email: string;

  @ApiProperty()
  age: number;

  @ApiProperty()
  gender: 'male' | 'female' | 'other';

  @ApiProperty({ type: [String] })
  phoneNumber?: string[];
}
