import { HttpService } from '@nestjs/axios';
import { Observable } from 'rxjs';
import { AttendanceDto } from './dto/attendance.dto';
import { AttendanceResponseDto } from './dto/attendance-response.dto';
import { AttendanceSearchDto } from './dto/attendance-search.dto ';
export declare class AttendanceService {
    private httpService;
    constructor(httpService: HttpService);
    url: string;
    findById(attendanceId: string): Promise<Observable<AttendanceDto>>;
    createAttendance(attendanceDto: AttendanceDto): Promise<Observable<AttendanceResponseDto>>;
    updateAttendance(attendanceId: string, attendanceDto: AttendanceDto): Promise<Observable<AttendanceResponseDto>>;
    searchAttendance(attendanceSearchDto: AttendanceSearchDto): Promise<Observable<any>>;
    findAttendanceByClass(searchClassId: String, fromDate: String, toDate: String): Promise<Observable<any>>;
    findAttendanceByClassAndSubject(classId: String, subjectId: String, fromDate: String, toDate: String): Promise<Observable<any>>;
}
