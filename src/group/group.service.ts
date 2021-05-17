import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { GroupsEntity } from './group.entity';

@Injectable()
export class GroupsService {
  constructor(
    @InjectRepository(GroupsEntity)
    private readonly groupsRepository: Repository<GroupsEntity>,
  ) {}

  async showOne(id: number): Promise<GroupsEntity> {
    return await this.groupsRepository.findOne(id);
  }
  async showAll(): Promise<GroupsEntity[]> {
    return await this.groupsRepository.find();
  }
  async createGroup(group: GroupsEntity): Promise<any> {
    return await this.groupsRepository.save(group);
  }
  async getAllUserOfOneGroup(idGroup: number): Promise<GroupsEntity> {
    return await this.groupsRepository.findOne(idGroup, {
      relations: ['users'],
    });
  }
  async update(id, group: GroupsEntity): Promise<UpdateResult> {
    return await this.groupsRepository.update(id, group);
  }
  async destroy(id: number): Promise<DeleteResult> {
    return await this.groupsRepository.delete(id);
  }
  // async deleteUserInGroup(idUser:number,idGroup:number):Promise<DeleteResult>{
  //     let myGroup = await this.groupsRepository.findOne({id:idGroup});
  //     let userDelete = await this.groupsRepository.findOne({myGroup.users.id:idUser})
  //     return await this.groupsRepository.delete(myGroup.users.find({id:idUser}));
  // }
}
