import { ApiProperty, ApiPropertyOptional, ApiSchema } from '@nestjs/swagger';

@ApiSchema({ description: 'Data Transfer Object for user registration' })
export class RegisterDto {
  @ApiProperty({
    example: 'admin',
    description: 'Username for login'
  })
  username: string;

  @ApiProperty({
    example: 'P@ssw0rd!',
    description: 'Password for login'
  })
  password: string;

  @ApiPropertyOptional({
    default: 20,
    description: 'Age of the user'
  })
  age: number;

  @ApiProperty({
    example: 'male',
    description: 'Gender of the user',
    enum: ['male', 'female', 'other']
  })
  gender: 'male' | 'female' | 'other';

  @ApiPropertyOptional({
    type: [String],
    example: ['+1234567890', '+0987654321'],
    description: 'List of phone numbers'
  })
  phoneNumber?: string[];
}
