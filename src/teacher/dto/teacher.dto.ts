import { Exclude, Expose } from 'class-transformer';
import { MaxLength, IsNotEmpty, IsEmail, IsString, IsNumber } from 'class-validator';

export class TeacherDto {
  
  @Exclude()
  osid : string 

  @Exclude()
  osUpdatedAt : string

  @Exclude()
  osCreatedAt : string

  @Exclude()
  osUpdatedBy: string
  
  @Exclude()
  osCreatedBy: string
  
  @MaxLength(16)
  refteacherId: string;
  
  firstName: string;
  
  lastName: string;
  
  @IsNumber()
  contactNumber: string;
  
  @IsEmail()
  email: string;
  
  gender: string;
  
  socialCategory: string;

  birthDate: string;

  designation: string;

  cadre: string;

  profQualification: string;

  joiningDate: string;

  subjectId: string;

  bloodGroup: string;

  maritalStatus: string;

  blockId: string;

  address: string;

  compSkills: string;

  disability: string;

  religion: string;

  homeDistance: string;

  roles: string;

  schoolId: string;

  acrId: string;

  retirementDate: string;

  workingStatus: string;

  constructor(partial: Partial<TeacherDto>) {
    Object.assign(this, partial);
  }

  @Expose()
  get teacherName(): string {
    return `${this.firstName} ${this.lastName}`;
  }

  @Expose()
  @IsString()
  @IsNotEmpty()
  get teacherId(): string {
    return `${this.osid}`;
  }

}
