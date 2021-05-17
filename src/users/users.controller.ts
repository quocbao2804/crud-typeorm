import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersEntity } from './users.entity';
import { UsersDTO } from './interfaces/users.dto';

@Controller('users')
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

  @Post(':idUser/joinGroup/:idGroup')
  async joinGroup(
    @Param('idUser') idUser: number,
    @Param('idGroup') idGroup: number,
  ) {
    return await this.usersService.joinGroup(idUser, idGroup);
  }

  @Put(':id')
  async update(@Body() user: UsersEntity, @Param('id') id: number) {
    return await this.usersService.update(id, user);
  }

  @Delete(':id')
  async deleteUser(@Param('id') id: number) {
    return await this.usersService.destroy(id);
  }

  @Delete(':idUser/deleteUserInGroup/:idGroup')
  async deleteUserInGroup(
    @Param('idUser') idUser: number,
    @Param('idGroup') idGroup: number,
  ) {
    return await this.usersService.deleteUserInGroup(idUser, idGroup);
  }
}
