import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  users = [];

  create(createUserDto: CreateUserDto) {
    this.users.push(createUserDto);
    return createUserDto;
  }

  findAll() {
    return this.users;
  }

  findOne(id: string) {
    return this.users.filter((user) => user.id === id);
  }

  update(id: string, updateUserDto: UpdateUserDto) {
    const user = this.users.find((user) => user.id === id);
    Object.assign(user, updateUserDto);
    return user;
  }

  remove(id: string) {
    this.users = this.users.filter((user) => user.id !== id);
    return `User with id ${id} has been removed`;
  }
}
