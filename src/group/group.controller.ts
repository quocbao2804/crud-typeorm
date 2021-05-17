import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { GroupsService } from './group.service';
import { GroupsEntity } from './group.entity';

@Controller('groups')
export class GroupsController {
  constructor(private readonly groupsService: GroupsService) {}

  @Get(':id')
  async getOneRoom(@Param() params) {
    return await this.groupsService.showOne(params);
  }

  @Get()
  async getManyRoom() {
    return await this.groupsService.showAll();
  }
  @Get(':idGroup/getAllUser')
  async getAllUser(@Param('idGroup') idGroup: number) {
    return await this.groupsService.getAllUserOfOneGroup(idGroup);
  }
  @Post()
  async createGroup(@Body() group: GroupsEntity) {
    return await this.groupsService.createGroup(group);
  }

  @Put(':id')
  async update(@Body() group: GroupsEntity, @Param('id') id: number) {
    return await this.groupsService.update(id, group);
  }
  @Delete(':idUser/deleteUser/:id')
  async deleteUserInGroup(
    @Param('idUser') idUser: number,
    @Param('id') id: number,
  ) {
    return await this.groupsService.deleteUserInGroup(idUser, id);
  }
  @Delete(':id')
  async deleteUser(@Param('id') id: number) {
    return await this.groupsService.destroy(id);
  }
}
