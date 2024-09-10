import { Column, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Task {
    @PrimaryGeneratedColumn('uuid')
    id!: string;

    @Column("varchar", {length: 50, nullable: false})
    name!: string;

    @Column("varchar", {length: 140})
    description!: string;

    @Column({nullable: false})
    finished!: boolean;

    @UpdateDateColumn()
    finishedAt!: string;

    @Column({nullable: false})
    priority!: number;
}