import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateUserDto } from './dto/CreateUser.dto';
import { UpdateUserDto } from './dto/UpdateUser.dto';
import { ApiTags } from '@nestjs/swagger';

import { UsersService } from './users.service';
import mongoose from 'mongoose';

@Controller('users')
@ApiTags('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Post()
  createUser(@Body() createUserDto: CreateUserDto) {
    return this.usersService.createUser(createUserDto);
  }

  @Get()
  getUsers() {
    return this.usersService.getUsers();
  }

  @Get(':id')
  async getUserById(@Param('id') id: string) {
    const validId = mongoose.Types.ObjectId.isValid(id);
    if (!validId) throw new HttpException('Id is not valid', 400);
    const user = await this.usersService.getUser(id);
    if (!user) throw new HttpException('User not found', 404);
    return user;
  }

  @Patch(':id')
  async updateUser(
    @Param('id') id: string,
    @Body() updateUserDto: UpdateUserDto,
  ) {
    const validId = mongoose.Types.ObjectId.isValid(id);
    if (!validId) throw new HttpException('Id is not valid', 400);
    const newUser = await this.usersService.updateUser(id, updateUserDto);
    if (!newUser) throw new HttpException('User not found', 404);
    return newUser;
  }

  @Delete(':id')
  async deleteUser(@Param('id') id: string) {
    const validId = mongoose.Types.ObjectId.isValid(id);
    if (!validId) throw new HttpException('Id is not valid', 400);
    const deletedUser = await this.usersService.deleteUser(id);
    if (!deletedUser) throw new HttpException('User not found', 404);
    return deletedUser;
  }
}
