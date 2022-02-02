import { PrimaryGeneratedColumn, Column } from 'typeorm';

export abstract class BaseEntity {
    @PrimaryGeneratedColumn('identity')
    id: string;

    @Column({ type: 'timestamptz', default: () => "CURRENT_TIMESTAMP(6)" })
    createdOn: Date;

    @Column({ type: 'varchar', nullable: true })
    createdBy: string;

    @Column({ type: 'timestamptz', default: () => "CURRENT_TIMESTAMP(6)" })
    updatedOn: Date;

    @Column({ type: 'varchar', nullable: true })
    updatedy: string;
}