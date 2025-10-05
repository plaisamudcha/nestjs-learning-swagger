import {
  applyDecorators,
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Query
} from '@nestjs/common';
import { RegisterDto } from './dtos/register.dto';
import { UserQueryDto } from './dtos/user-query.dto';
import { ApiBearerAuth, ApiOkResponse } from '@nestjs/swagger';
import { UserDto } from './dtos/user-dto';
import { ApiRegister } from 'src/decorators/swagger/api-register.decorator';

@Controller('auth')
export class AuthController {
  // we can group decorators at the controller level
  @ApiRegister()
  @Post('register')
  register(@Body() registerDto: RegisterDto) {
    return 'User registered';
  }

  @HttpCode(HttpStatus.OK)
  @Post('login')
  login() {
    return 'User logged in';
  }

  @ApiBearerAuth()
  @ApiOkResponse({ description: 'success operation', type: UserDto })
  @Get(':id')
  findById(@Param('id') uuid: string, @Query() userQueryDto: UserQueryDto) {
    console.log('ID parameter:', uuid);
    return `User with ID ${uuid} found with age ${userQueryDto.age || 'N/A'}`;
  }
}
