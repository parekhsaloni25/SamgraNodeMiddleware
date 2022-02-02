import { Entity, Column } from 'typeorm';
import { BaseEntity } from '../model/base.entity';

@Entity({ name: 'config' })
export class Config extends BaseEntity {

    @Column({ type: 'varchar', length: 300 })
    module: string;

    @Column({ type: 'varchar', length: 300 })
    key: string;

    @Column({ type: 'varchar', length: 300 })
    value: string;    

    @Column({ type: 'varchar', length: 300 })
    context: string; // (state / school)

    @Column({ type: 'varchar' })
    contextId: string; // (schoolId in case of school)

    @Column({ type: 'boolean' })
    canOverride: boolean;    

}