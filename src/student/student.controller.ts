import {
  Controller,
  Put,
  Get,
  Body,
  Res,
  Param,
  UseGuards,
  HttpStatus,
  NotFoundException,
  ClassSerializerInterceptor,
  UseInterceptors,
  Post,
  Query,
} from "@nestjs/common";
import { StudentSearchDto } from "./dto/student-search.dto ";
import { StudentDto } from "./dto/student.dto";
import { StudentService } from "./student.service";

@Controller("student")
export class StudentController {
  constructor(private readonly studentService: StudentService) {}

  @UseInterceptors(ClassSerializerInterceptor)
  @Get("/:id")
  public async getStudentById(@Param("id") studentId: string )  {
    return this.studentService.findById(studentId);
  }

  @Post()
  public async createStudent(@Body() studentDto: StudentDto )  {
    return this.studentService.createStudent(studentDto);
  }

  @Put("/:id")
  public async updateStudent(@Param("id") studentId: string, @Body() studentDto: StudentDto )  {
    return this.studentService.updateStudent(studentId,studentDto);
  }

  @Post("/search")
  public async searchStudent(@Body() studentSearchDto: StudentSearchDto )  {
    return this.studentService.searchStudent(studentSearchDto);
  }

  @Get("/findByClass?")
  public async findStudentByClass(@Query("classId") classId: string )  {
    return this.studentService.findStudentByClass(classId);
  } 

  // @Get("/findByClassAndSubject")
  // public async findStudentByClassAndSubject(@Query("classId") classId: string,
  // @Query("classId") subjectId: string)  {
  //   return this.studentService.findStudentByClassAndSubject(classId,subjectId);
  // } 
 
}
