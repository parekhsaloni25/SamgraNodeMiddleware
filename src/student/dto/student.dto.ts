import { Exclude, Expose } from 'class-transformer';
import { MaxLength, IsNotEmpty, IsEmail, IsString, IsNumber } from 'class-validator';

export class StudentDto {
  
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
  aadhaar: string;
  
  refStudentId: string;
  
  firstName: string;
  
  lastName: string;
  
  @IsNumber()
  contactNumber: string;
  
  @IsEmail()
  email: string;
  
  gender: string;
  
  socialCategory: string;
  
  iscwsn: string;
  
  religion: string;
  
  singleGirl: string;
  
  weight: string;
  
  height: string;
  
  bloodGroup: string;
  
  birthDate: string;
  
  homeless: string;
  
  bpl: string;
  
  migrant: string;
  
  schoolId: string;
  
  classId: string;
  
  status: string;

  constructor(partial: Partial<StudentDto>) {
    Object.assign(this, partial);
  }

  @Expose()
  get studentName(): string {
    return `${this.firstName} ${this.lastName}`;
  }

  @Expose()
  @IsString()
  @IsNotEmpty()
  get studentId(): string {
    return `${this.osid}`;
  }

}
