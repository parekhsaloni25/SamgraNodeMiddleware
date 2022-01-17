import { HttpService } from '@nestjs/axios';
import { Observable } from 'rxjs';
import { StudentDto } from './dto/student.dto';
import { StudentResponseDto } from './dto/student-response.dto';
export declare class StudentService {
    private httpService;
    constructor(httpService: HttpService);
    findById(studentId: string): Promise<Observable<StudentDto>>;
    createStudent(studentDto: StudentDto): Promise<Observable<StudentResponseDto>>;
}
