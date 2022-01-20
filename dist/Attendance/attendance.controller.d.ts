import { AttendanceSearchDto } from "./dto/attendance-search.dto ";
import { AttendanceDto } from "./dto/attendance.dto";
import { AttendanceService } from "./attendance.service";
export declare class AttendanceController {
    private readonly attendanceService;
    constructor(attendanceService: AttendanceService);
    getAttendanceById(attendanceId: string): Promise<import("rxjs").Observable<AttendanceDto>>;
    createAttendance(attendanceDto: AttendanceDto): Promise<import("rxjs").Observable<import("./dto/attendance-response.dto").AttendanceResponseDto>>;
    updateAttendance(attendanceId: string, attendanceDto: AttendanceDto): Promise<import("rxjs").Observable<import("./dto/attendance-response.dto").AttendanceResponseDto>>;
    searchAttendance(attendanceSearchDto: AttendanceSearchDto): Promise<import("rxjs").Observable<any>>;
    findAttendanceByClass(classId: String, fromDate: String, toDate: String): Promise<import("rxjs").Observable<any>>;
    findByClassAndSubject(classId: String, subjectId: String, fromDate: String, toDate: String): Promise<import("rxjs").Observable<any>>;
}
