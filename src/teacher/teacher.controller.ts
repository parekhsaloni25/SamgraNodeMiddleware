import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { TeacherDto } from "./dto/teacher.dto";
import { TeacherService } from "./teacher.service";

@Controller("teacher")
export class TeacherController {
  constructor(private readonly teacherService: TeacherService) {}

  @Post()
  public async createStudent(@Body() studentDto: TeacherDto )  {
    return this.teacherService.createTeacher(studentDto);
  }

  @Put("/:id")
  public async updateTeacher(@Param("id") teacherId: string, @Body() teacherDto: TeacherDto )  {
    return this.teacherService.updateTeacher(teacherId,teacherDto);
  }

  @Delete("/:id")
  public async deleteTeacher(@Param("id") teacherId: string, @Body() teacherDto: TeacherDto )  {
    return this.teacherService.deleteTeacher(teacherId);
  }

  @Get("/:id")
  public async getTeacher(@Param("id") teacherId: string, @Body() teacherDto: TeacherDto )  {
    return this.teacherService.getTeacher(teacherId);
  }
}
