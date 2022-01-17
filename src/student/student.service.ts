import { Injectable, NotFoundException, HttpException, HttpStatus } from '@nestjs/common';
import { catchError, map } from 'rxjs/operators';
import { firstValueFrom } from 'rxjs';
import {HttpService} from '@nestjs/axios'
import { Observable } from 'rxjs';
import { AxiosResponse } from 'axios';
import { StudentDto} from './dto/student.dto';
import { ErrorResponse } from 'src/error-response';
import { StudentResponseDto } from './dto/student-response.dto';
import { StudentSearchDto } from './dto/student-search.dto ';

@Injectable()
export class StudentService {
  constructor(private httpService:HttpService) {}
 

  public async findById(studentId: string)  {
    const url = process.env.BASE_URL + '/Student/'+studentId
    return this.httpService.get(url)
    .pipe(
        map(response => {
          return new StudentDto(response.data) 
      }),
        catchError(e => {
          var error = new ErrorResponse({
            errorCode : e.response.status,
            errorMessage : e.response.data.params.errmsg
          })
          throw new HttpException(error, e.response.status);
        })
    );
  }

  public async createStudent(studentDto: StudentDto) {
      const headersRequest = {
        'Content-Type': 'application/json', 
        // 'Authorization': `Basic ${encodeToken}`,
      };
      const url = process.env.BASE_URL + '/Student'
      return this.httpService.post(url,studentDto,{ headers: headersRequest })
      .pipe(
          map(response => {
            return new StudentResponseDto( {
              studentId: response.data.result.student.osid,
              responseMessage : "Student Saved Successfully",
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


  public async updateStudent(studentId:string,studentDto: StudentDto) {
    const headersRequest = {
      'Content-Type': 'application/json', 
      // 'Authorization': `Basic ${encodeToken}`,
    };
    const url = process.env.BASE_URL + '/Student/'+studentId
    return this.httpService.put(url,studentDto,{ headers: headersRequest })
    .pipe(
        map(response => {
          return new StudentResponseDto( {
            studentId: response.data.result.student.osid,
            responseMessage : "Student Updated Successfully",
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

public async searchStudent(studentSearchDto: StudentSearchDto) {
  const headersRequest = {
    'Content-Type': 'application/json', 
    // 'Authorization': `Basic ${encodeToken}`,
  };
  const url = process.env.BASE_URL + '/Student'
  return this.httpService.post(url,studentSearchDto,{ headers: headersRequest })
  .pipe(
      map(response => {
        response.data.ForEach(item =>{
            item = new StudentDto(item)
        });
        return response.data
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

public async findStudentByClass(searchClassId: String) {
  const headersRequest = {
    'Content-Type': 'application/json', 
  };

  var searchFilter = {
    classId : {
     "eq" : searchClassId
    }
  }
  var studentSearchDto = new StudentSearchDto({
    filters : searchFilter
  })
  const url = process.env.BASE_URL + '/Student'
  return this.httpService.post(url,studentSearchDto,{ headers: headersRequest })
  .pipe(
      map(response => {
        response.data.ForEach(item =>{
            item = new StudentDto(item)
        });
        return response.data
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


