import { applyDecorators } from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiConflictResponse,
  ApiOperation
} from '@nestjs/swagger';

export const ApiRegister = () =>
  applyDecorators(
    ApiOperation({ summary: 'Register a new user' }),
    ApiBadRequestResponse({ description: 'Invalid input data' }),
    ApiConflictResponse({ description: 'Username already exists' })
  );
