import { StudentDto } from "./dto/student.dto";
import { StudentService } from "./student.service";
export declare class StudentController {
    private readonly studentService;
    constructor(studentService: StudentService);
    getStudentById(studentId: string): Promise<import("rxjs").Observable<StudentDto>>;
    createStudent(studentDto: StudentDto): Promise<import("rxjs").Observable<import("./dto/student-response.dto").StudentResponseDto>>;
}
