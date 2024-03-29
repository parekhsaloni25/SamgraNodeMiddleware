import { Group } from 'src/group/group.entity';
import { Entity, Column, OneToOne, JoinColumn, OneToMany, ManyToOne } from 'typeorm';
import { BaseEntity } from './../model/base.entity';

@Entity({ name: 'groupMembership' })
export class GroupMembership extends BaseEntity {

    @Column({ type: 'varchar' })
    schoolId: string;

    @ManyToOne(type => Group)
    @JoinColumn({name: 'groupId', referencedColumnName: "id"})
    group: Group;   

    @Column({ type: 'varchar' })
    userId: string;

    @Column({ type: 'varchar', length: 300 })
    role: string;
}
