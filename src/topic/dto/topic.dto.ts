import { Exclude, Expose } from 'class-transformer';

export class TopicDto {
  
  @Exclude()
  osid : string 

  @Expose()
  topicId : string;

  @Expose()
  schoolId : string;

  @Expose()
  name : string;

  @Expose()
  category : string;

  @Expose()
  status : string;


  constructor(partial: TopicDto) {
    Object.assign(this, partial);
    this.topicId = `${this.osid}`;
    this.schoolId = `${this.schoolId}` == null || undefined || 'undefined' ? "" : `${this.schoolId}` ;
    this.name = `${this.name}` == null || undefined || 'undefined' ? "" : `${this.name}` ;
    this.category = `${this.category}` == null || undefined || 'undefined' ? "" : `${this.category}` ;
    this.status = `${this.status}` == null || undefined || 'undefined' ? "" : `${this.status}` ;
  }
}
