import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Member {
    @PrimaryGeneratedColumn('uuid')
    id!: string;

    @Column({nullable: false, unique: true})
    email!: string;

    @Column({nullable: false})
    name!: string;

    @Column({nullable: false})
    password!: string;
}