import { HttpService } from "@nestjs/axios";
import { HttpException, Injectable } from "@nestjs/common";
import { catchError, map } from "rxjs/operators";
import { ErrorResponse } from "src/error-response";
import { TeacherResponseDto } from "./dto/teacher-response.dto";
import { TeacherDto } from "./dto/teacher.dto";

@Injectable()
export class TeacherService {
  constructor(private httpService:HttpService) {}

  public async createTeacher(teacherDto: TeacherDto) {
    const headersRequest = {
      'Content-Type': 'application/json', 
      // 'Authorization': `Basic ${encodeToken}`,
    };
    const url = process.env.BASE_URL + '/Teacher'
    return this.httpService.post(url,teacherDto,{ headers: headersRequest })
    .pipe(
        map(response => {
          return new TeacherResponseDto( {
            teacherId: response.data.result.teacher.osid,
            responseMessage : "Teacher Saved Successfully",
            responseCode : response.data.responseCode
          })
      }),
        catchError(e => {
          console.log(e.response.data)
          var error = new ErrorResponse({
            errorCode : e.response.status,
            errorMessage : e.response.data.params.errmsg
          })
          throw new HttpException(error, e.response.status);
        })
    );
    }

    public async updateTeacher(teacherId:string,teacherDto: TeacherDto) {
        const headersRequest = {
          'Content-Type': 'application/json', 
          // 'Authorization': `Basic ${encodeToken}`,
        };
        const url = process.env.BASE_URL + '/Teacher/'+teacherId
        return this.httpService.put(url,teacherDto,{ headers: headersRequest })
        .pipe(
            map(response => {
              return new TeacherResponseDto( {
                teacherId: response.data.result.teacher.osid,
                responseMessage : "Teacher Updated Successfully",
                responseCode : response.data.responseCode
              })
          }),
            catchError(e => {
              console.log(e.response.data)
              var error = new ErrorResponse({
                errorCode : e.response.status,
                errorMessage : e.response.data.params.errmsg
              })
              throw new HttpException(error, e.response.status);
            })
        );
    }

    public async deleteTeacher(teacherId:string) {
        const headersRequest = {
          'Content-Type': 'application/json', 
          // 'Authorization': `Basic ${encodeToken}`,
        };
        const url = process.env.BASE_URL + '/Teacher/'+teacherId
        return this.httpService.delete(url,{ headers: headersRequest })
        .pipe(
            map(response => {
              return new TeacherResponseDto( {
                teacherId: response.data.result.teacher.osid,
                responseMessage : "Teacher Deleted Successfully",
                responseCode : response.data.responseCode
              })
          }),
            catchError(e => {
              console.log(e.response.data)
              var error = new ErrorResponse({
                errorCode : e.response.status,
                errorMessage : e.response.data.params.errmsg
              })
              throw new HttpException(error, e.response.status);
            })
        );
    }

    public async getTeacher(teacherId:string) {
        const headersRequest = {
          'Content-Type': 'application/json', 
          // 'Authorization': `Basic ${encodeToken}`,
        };
        const url = process.env.BASE_URL + '/Teacher/'+teacherId
        return this.httpService.get(url,{ headers: headersRequest })
        .pipe(
            map(response => {
              return new TeacherResponseDto( {
                teacherId: response.data.result.teacher.osid,
                responseMessage : "Teacher Updated Successfully",
                responseCode : response.data.responseCode
              })
          }),
            catchError(e => {
              console.log(e.response.data)
              var error = new ErrorResponse({
                errorCode : e.response.status,
                errorMessage : e.response.data.params.errmsg
              })
              throw new HttpException(error, e.response.status);
            })
        );
    }
}