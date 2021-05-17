import { Injectable } from '@nestjs/common';
import { Task } from './task.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UpdateResult, DeleteResult } from 'typeorm';

@Injectable()
export class TaskService {
  constructor(
    @InjectRepository(Task)
    private readonly taskRepo: Repository<Task>,
  ) {}

  async findAll(): Promise<Task[]> {
    return await this.taskRepo.find();
  }

  async findOne(id: number): Promise<Task> {
    return await this.taskRepo.findOne(id);
  }

  async create(task: Task): Promise<Task> {
    return await this.taskRepo.save(task);
  }

  async update(task: Task): Promise<UpdateResult> {
    return await this.taskRepo.update(task.id, task);
  }

  async delete(id): Promise<DeleteResult> {
    return await this.taskRepo.delete(id);
  }
}
