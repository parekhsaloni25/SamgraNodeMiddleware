import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { getManager, Repository } from 'typeorm';
import { GroupMembershipDto } from './dto/groupMembership.dto';
import { GroupMembership } from './groupMembership.entity';

@Injectable()
export class GroupMembershipService {
    
    [x: string]: any;

  private entityManager = getManager();

  constructor(
    @InjectRepository(GroupMembership)
    private readonly groupMembershipRepository: Repository<GroupMembership>
  ) {}
  
  public async createGroupMembership(groupMembershipDto: GroupMembershipDto): Promise<GroupMembership>  {
    return await this.groupMembershipRepository.save(groupMembershipDto);
  }

  public async getGroupMembership(): Promise<GroupMembership[]>  {
    return await this.groupMembershipRepository.find();
  }

  public async findGroupMembershipById(groupMembershipId:string): Promise<GroupMembership>  {
    return await this.groupMembershipRepository.findOne(groupMembershipId);
  }

  public async findGroupMembershipBySchoolId(schoolId:string): Promise<GroupMembership[]>  {
    return await this.groupMembershipRepository.find({schoolId});
  }

  public async findGroupMembershipByUserId(userId:string): Promise<GroupMembership[]>  {
    return await this.groupMembershipRepository.find({userId});
  }

  public async updateGroupMembership(groupMembershipId:string, updateGroupMembershipDto:GroupMembershipDto): Promise<string>  {
    const a = await this.groupMembershipRepository.update(groupMembershipId, updateGroupMembershipDto);
    return 'groupMembership is updated successfully.';
  }

  public async deleteGroupMembership(groupMembershipId:string): Promise<string>  {
    const grpDeleted = await this.groupMembershipRepository.delete(groupMembershipId);
    return 'groupMembership is deleted successfully.';
  }
}
