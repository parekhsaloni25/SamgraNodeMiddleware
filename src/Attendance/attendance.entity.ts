import { Entity, Column } from 'typeorm';
import { BaseEntity } from '../model/base.entity';

@Entity({ name: 'attendance' })
export class Attendance extends BaseEntity {

    @Column({ type: 'uuid' })
    schoolId: string;

    @Column({ type: 'uuid' })
    userId: string;   

    @Column({ type: 'uuid' })
    groupId: string; 

    @Column({ type: 'uuid' })
    topicId: string;

    @Column({ type: 'uuid' })
    eventId: string;

    @Column({ type: 'timestamptz' })
    date: Date;

    @Column({ type: 'varchar', length: 300 })
    attendance: string;

    @Column({ type: 'varchar', length: 300 })
    remark: string;

    @Column({ type: 'varchar', length: 300 })
    approved: string;    

    @Column({ type: 'varchar', length: 300 })
    approvedBy: string;

    @Column({ type: 'timestamptz' })
    createdOn: Date;
}
