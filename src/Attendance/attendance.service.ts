import { Injectable, NotFoundException, HttpException, HttpStatus } from '@nestjs/common';
import { catchError, map } from 'rxjs/operators';
import { firstValueFrom } from 'rxjs';
import {HttpService} from '@nestjs/axios'
import { Observable } from 'rxjs';
import { AxiosResponse } from 'axios';
import { AttendanceDto} from './dto/attendance.dto';
import { AttendanceResponseDto } from './dto/attendance-response.dto';
import { AttendanceSearchDto } from './dto/attendance-search.dto ';
import { ErrorResponse } from './../error-response';
import { Repository } from 'typeorm';
import { Attendance } from './attendance.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class AttendanceService {
  constructor(private httpService:HttpService,
  @InjectRepository(Attendance)
  private readonly attendanceRepository: Repository<Attendance>) {}
  
  public async findById(attendanceId: string)  {
    const attendance = await this.attendanceRepository.findOne({
      where: {
        id: attendanceId,
      },
    });
    if (!attendance) {
      throw new NotFoundException(`Attendance not found for Id`);
    }
    return attendance;
  }

  public async findByDate(fromDate: string, toDate:string,topicId:string,
    groupId:string) : Promise<Attendance[]>  {
    var query ='';
    if(fromDate!='' && fromDate!=null && toDate!='' && toDate!=null) {
      query += "attendance.date between :fromDate and :toDate"
    }
    else if(fromDate!='' && fromDate!=null) {
      query += "attendance.date <= :fromDate"
    }
    else if(toDate!='' && toDate!=null) {
      query += "attendance.date <= :toDate"
    }

    if(topicId!='' && topicId!=null) {
      query += " and attendance.topicId = :topicId"
    }
    if(groupId!='' && groupId!=null) {
      query += " and attendance.groupId = :groupId"
    }
    const attendance = await this.attendanceRepository.createQueryBuilder()
    .select("attendance") 
    .from(Attendance, "attendance") 
    .where(query, { fromDate: fromDate,
    toDate:toDate, topicId:topicId, groupId:groupId }).getMany();
   
    if (!attendance) {
      throw new NotFoundException(`Attendance not found for Id`);
    }
    return attendance;
  }

  public async createAttendance(attendanceDto: AttendanceDto[]) {
    try {
      return await this.attendanceRepository.save(attendanceDto);
    } catch (err) {
      throw new HttpException(err, HttpStatus.BAD_REQUEST);
    }
  }


  public async updateAttendance(attendanceDto: AttendanceDto) {
    try {
      return await this.attendanceRepository.save(attendanceDto);
    } catch (err) {
      throw new HttpException(err, HttpStatus.BAD_REQUEST);
    }
  }

public async searchAttendance(attendanceSearchDto: AttendanceSearchDto) {
 

 
}

public async findAttendanceByClass(searchClassId: String,
  fromDate: String, toDate: String) {
 
}


public async findAttendanceByClassAndSubject(classId: String,
  subjectId : String,
  fromDate: String, toDate: String) {
  }
 

}


