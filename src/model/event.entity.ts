import { Entity, Column } from 'typeorm';
import { BaseEntity } from './base.entity';

@Entity({ name: 'event' })
export class Event extends BaseEntity {

    @Column({ type: 'uuid' })
    schoolId: string;

    @Column({ type: 'varchar', length: 300 })
    name: string;    

    @Column({ type: 'timestamptz' })
    start: Date;

    @Column({ type: 'timestamptz' })
    end: Date;

    @Column({ type: 'boolean' })
    recurring: boolean;

    @Column({ type: 'varchar', length: 300 })
    recurringFrequency: string;    

    @Column({ type: 'uuid' })
    groupId: string;

    @Column({ type: 'uuid' })
    topicId: string;

    @Column({ type: 'uuid' })
    creatorId: string;

    @Column({ type: 'uuid' })
    primaryUserId: string;

    @Column({ type: 'varchar', length: 300 })
    status: string;
}
