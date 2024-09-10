import { Column, PrimaryGeneratedColumn } from "typeorm";

export class Member {
    @PrimaryGeneratedColumn('uuid')
    id!: string;

    @Column({nullable: false, unique: true})
    email!: string;

    @Column({nullable: false})
    name!: string;
}