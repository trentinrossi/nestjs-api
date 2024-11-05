import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, MinLength } from 'class-validator';

export class UpdateUserDto extends PartialType(CreateUserDto) {
  @ApiProperty({
    description: 'The unique identifier of the user',
  })
  id: string;

  @ApiProperty({
    example: 'User Name',
    required: false,
  })
  name: string;

  @ApiProperty({
    example: 'user.name@mail.com',
    required: false,
  })
  email: string;

  @ApiProperty({
    example: 'password',
    required: false,
    minLength: 8,
  })
  @IsNotEmpty()
  @MinLength(8)
  password: string;

  @ApiProperty({
    example: 'admin|user|guest',
    required: false,
  })
  role: string;
}
