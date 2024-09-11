import { Repository } from "typeorm";
import { Member } from "../entities/Member";
import { dataSource } from "../connection";
import { MemberType } from "../../types/MemberType";

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

    async findMemberByEmail(email: string) {
        const member = await this.memberRepo.findOneBy({email});
        return member;
    }

    async findMemberById(id: string) {
        const user = await this.memberRepo.findOneBy({id});
        return user;
    }
    async deleteMember(id: string) {
        return await this.memberRepo.delete({id});
    }
}