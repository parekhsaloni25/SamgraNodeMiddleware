import { Entity, Column } from 'typeorm';
import { BaseEntity } from './base.entity';

@Entity({ name: 'groupMembership' })
export class GroupMembership extends BaseEntity {

    @Column({ type: 'uuid' })
    schoolId: string;

    @Column({ type: 'uuid' })
    groupId: string;    

    @Column({ type: 'uuid' })
    userId: string;

    @Column({ type: 'varchar', length: 300 })
    role: string;
}
