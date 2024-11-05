import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({
    example: '1',
    description: 'The id of the user',
  })
  id: string;

  @ApiProperty({
    example: 'John Doe',
    description: 'The name of the user',
  })
  name: string;

  @ApiProperty({
    example: 'user.name@mail.com',
    description: 'The email of the user',
  })
  email: string;

  @ApiProperty({
    example: 'password',
    description: 'The password of the user',
  })
  password: string;

  @ApiProperty({
    example: 'admin|user|guest',
    description: 'The role of the user',
  })
  role: string;
}
