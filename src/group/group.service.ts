import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { getManager, Repository } from 'typeorm';
import { GroupDto } from './dto/group.dto';
import { Group } from './group.entity';

@Injectable()
export class GroupService {
    [x: string]: any;

  private entityManager = getManager();

  constructor(
    @InjectRepository(Group)
    private readonly groupRepository: Repository<Group>
  ) {}
  
  public async createGroup(groupDto: GroupDto): Promise<Group>  {
    return await this.groupRepository.save(groupDto);
  }

  public async getGroup(): Promise<Group[]>  {
    return await this.groupRepository.find();
  }

  public async findGroupById(groupId:string): Promise<Group>  {
    return await this.groupRepository.findOne(groupId);
  }

  public async updateGroup(groupId:string, updateGroupDto:GroupDto): Promise<string>  {
    const a = await this.groupRepository.update(groupId, updateGroupDto);
    return 'group is updated successfully.';
  }

  public async deleteGroup(groupId:string): Promise<string>  {
    const grpDeleted = await this.groupRepository.delete(groupId);
    return 'group is deleted successfully.';
  }
}
