import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiExtension } from '@nestjs/swagger';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  @ApiExtension('x-amazon-apigateway-integration', {
    uri: 'https://a01a-191-221-195-95.ngrok-free.app/users',
    passthroughBehavior: 'when_no_templates',
    httpMethod: 'POST',
    type: 'http',
    responses: {
      default: {
        statusCode: '201',
      },
    },
  })
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get()
  @ApiExtension('x-amazon-apigateway-integration', {
    uri: 'https://a01a-191-221-195-95.ngrok-free.app/users',
    passthroughBehavior: 'when_no_templates',
    httpMethod: 'GET',
    type: 'http',
    responses: {
      default: {
        statusCode: '200',
      },
    },
  })
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  @ApiExtension('x-amazon-apigateway-integration', {
    uri: 'https://a01a-191-221-195-95.ngrok-free.app/users/{id}',
    passthroughBehavior: 'when_no_templates',
    httpMethod: 'GET',
    type: 'http',
    requestParameters: {
      'integration.request.path.id': 'method.request.path.id',
    },
    responses: {
      default: {
        statusCode: '200',
      },
    },
  })
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(id);
  }

  @Patch(':id')
  @Patch(':id')
  @ApiExtension('x-amazon-apigateway-integration', {
    uri: 'https://a01a-191-221-195-95.ngrok-free.app/users/{id}',
    passthroughBehavior: 'when_no_templates',
    httpMethod: 'PATCH',
    type: 'http',
    responses: {
      default: {
        statusCode: '200',
      },
    },
  })
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(id, updateUserDto);
  }

  @Delete(':id')
  @ApiExtension('x-amazon-apigateway-integration', {
    uri: 'https://a01a-191-221-195-95.ngrok-free.app/users/{id}',
    passthroughBehavior: 'when_no_templates',
    httpMethod: 'DELETE',
    type: 'http',
    responses: {
      default: {
        statusCode: '200',
      },
    },
  })
  remove(@Param('id') id: string) {
    return this.usersService.remove(id);
  }
}
