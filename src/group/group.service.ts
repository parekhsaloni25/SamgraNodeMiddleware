import { HttpService } from '@nestjs/axios';
import { HttpException, Injectable } from '@nestjs/common';
import { catchError, map } from 'rxjs/operators';
import { ErrorResponse } from './../error-response';
import { GroupResponseDto } from './dto/group-response.dto';
import { GroupDto } from './dto/group.dto';

@Injectable()
export class GroupService {

    constructor(private httpService:HttpService) {}
  
    url = `${process.env.BASE_URL}/Group`;
  

    public async createGroup(groupDto: GroupDto) {
        const headersRequest  = {
          'Content-Type': 'application/json', 
        };
          return this.httpService.post(`${this.url}`,groupDto,{ headers: headersRequest })
          .pipe(
              map(response => {
                return new GroupResponseDto( {
                  groupId: response.data.result.group.osid,
                  responseMessage : "Group Saved Successfully",
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
      }0
}
