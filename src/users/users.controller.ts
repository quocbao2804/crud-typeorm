import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  UseFilters,
} from '@nestjs/common';
// import { Request, Response, NextFunction } from 'express';
import { UsersService } from './users.service';
// import { UsersEntity } from './users.entity';
import { UsersDTO } from './interfaces/users.dto';
import { userNotFoundExceptionFilter } from 'src/exception-filter/userNotFound.filter';

@Controller('users')
@UseFilters(new userNotFoundExceptionFilter())
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  async showAllUsers() {
    return await this.usersService.showAll();
  }

  @Get(':idUser/getAllGroup')
  async getAllGroup(@Param('idUser') idUser: number) {
    return await this.usersService.getAllGroup(idUser);
  }

  @Get(':id')
  async getUser(@Param() params) {
    return await this.usersService.getOneByIdOrFail(params);
  }

  @Get()
  async getUserById(id) {
    return await this.usersService.getOneById(id);
  }

  @Post()
  async createUsers(@Body() user: UsersDTO) {
    return await this.usersService.create(user);
  }

  @Post(':idUser/userJoinGroup/:idGroup')
  async userJoinGroup(
    @Param('idUser') idUser: number,
    @Param('idGroup') idGroup: number,
  ) {
    return await this.usersService.userJoinGroup(idUser, idGroup);
  }

  @Post(':idUser/groupJoinByUser/:idGroup')
  async groupJoinByUser(
    @Param('idUser') idUser: number,
    @Param('idGroup') idGroup: number,
  ) {
    return await this.usersService.groupJoinByUser(idUser, idGroup);
  }

  @Put(':id')
  async update(@Body() user: UsersDTO, @Param('id') id: number) {
    return await this.usersService.update(id, user);
  }

  @Delete(':id')
  async deleteUser(@Param('id') id: number) {
    return await this.usersService.destroy(id);
  }
}
