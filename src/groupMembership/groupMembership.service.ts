import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { response } from 'express';
import { ErrorResponse } from './../error-response';
import { SuccessResponse } from './../success-response';
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
  
  public async createGroupMembership(groupMembershipDto: GroupMembershipDto): Promise<SuccessResponse>  {
    try{
      const data = await this.groupMembershipRepository.save(groupMembershipDto);
      
      return new SuccessResponse({
        statusCode : response.statusCode,
        message :'GroupMembership is created Successfully',
        data : data,
      });
    } catch(e) {
      var error = new ErrorResponse({
        errorCode : e.response.status,
        errorMessage : e.response.data.params.errmsg
      })
      throw new HttpException(error, e.response.status);
    }
  }

  public async getGroupMembership(): Promise<SuccessResponse>  {
    try{
      const data = await this.groupMembershipRepository.find();
      
      return new SuccessResponse({
        statusCode : response.statusCode,
        message :'GroupMemberships found Successfully',
        data : data,
      });
    } catch(e) {
      var error = new ErrorResponse({
        errorCode : e.response.status,
        errorMessage : e.response.data.params.errmsg
      })
      throw new HttpException(error, e.response.status);
    }
  }

  public async findGroupMembershipById(groupMembershipId:string): Promise<SuccessResponse>  {
    try{
      const data = await this.groupMembershipRepository.findOne(groupMembershipId);
      
      return new SuccessResponse({
        statusCode : response.statusCode,
        message :'GroupMembership found Successfully by its id',
        data : data,
      });
    } catch(e) {
      var error = new ErrorResponse({
        errorCode : e.response.status,
        errorMessage : e.response.data.params.errmsg
      })
      throw new HttpException(error, e.response.status);
    }
  }

  public async findGroupMembershipBySchoolId(schoolId:string): Promise<SuccessResponse>  {
    try{
      const data = await this.groupMembershipRepository.find({schoolId});
      
      return new SuccessResponse({
        statusCode : response.statusCode,
        message :'GroupMembership found Successfully by schoolId',
        data : data,
      });
    } catch(e) {
      var error = new ErrorResponse({
        errorCode : e.response.status,
        errorMessage : e.response.data.params.errmsg
      })
      throw new HttpException(error, e.response.status);
    }
  }

  public async findGroupMembershipByUserId(userId:string): Promise<SuccessResponse>  {
    try{
      const data = await this.groupMembershipRepository.find({userId});
      
      return new SuccessResponse({
        statusCode : response.statusCode,
        message :'GroupMembership found Successfully by userId',
        data : data,
      });
    } catch(e) {
      var error = new ErrorResponse({
        errorCode : e.response.status,
        errorMessage : e.response.data.params.errmsg
      })
      throw new HttpException(error, e.response.status);
    }
  }

  public async updateGroupMembership(groupMembershipId:string, updateGroupMembershipDto:GroupMembershipDto): Promise<SuccessResponse>  {
    try{
      const data = await this.groupMembershipRepository.update(groupMembershipId, updateGroupMembershipDto);
      
      return new SuccessResponse({
        statusCode : response.statusCode,
        message :'GroupMembership is updated Successfully',
        data : data,
      });
    } catch(e) {
      var error = new ErrorResponse({
        errorCode : e.response.status,
        errorMessage : e.response.data.params.errmsg
      })
      throw new HttpException(error, e.response.status);
    }
  }

  public async deleteGroupMembership(groupMembershipId:string): Promise<SuccessResponse>  {
    try{
      const data = await this.groupMembershipRepository.delete(groupMembershipId);
      
      return new SuccessResponse({
        statusCode : response.statusCode,
        message :'GroupMembership is deleted Successfully',
        data : data,
      });
    } catch(e) {
      var error = new ErrorResponse({
        errorCode : e.response.status,
        errorMessage : e.response.data.params.errmsg
      })
      throw new HttpException(error, e.response.status);
    }
  }
}
