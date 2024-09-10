import { Repository } from "typeorm";
import { Member } from "../entities/Member";
import { dataSource } from "../connection";
import { MemberType } from "../../types/UserType";

export class MemberRepository {
    private memberRepo: Repository<Member>;

    constructor() {
        this.memberRepo = dataSource.getRepository(Member);
    }

    async createMember(member: MemberType) {
        let newMember = this.memberRepo.create(new Member());
        const {name, password, email} = member;
        newMember = {...newMember, name, password, email};
        return await this.memberRepo.save(newMember);
    }

    async findUserByEmail(email: string) {
        const user = this.memberRepo.findOneBy({email});
        return user;
    }
}