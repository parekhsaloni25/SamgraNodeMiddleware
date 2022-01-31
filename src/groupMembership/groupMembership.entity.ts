import { Entity, Column, OneToOne, JoinColumn } from 'typeorm';
import { BaseEntity } from './../model/base.entity';

@Entity({ name: 'groupMembership' })
export class GroupMembership extends BaseEntity {

    @Column({ type: 'uuid' })
    schoolId: string;

    // @OneToOne(type => Group)
    // @JoinColumn()
    // groupId: string;

    @Column({ type: 'uuid' })
    groupId: string;    

    @Column({ type: 'uuid' })
    userId: string;

    @Column({ type: 'varchar', length: 300 })
    role: string;
}
