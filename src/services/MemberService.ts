import createHttpError from "http-errors";
import { MemberRepository } from "../db/repositories/MemberRepository";
import { MemberType } from "../types/UserType";
import bcrypt from "bcrypt";

export class MemberService {
    private memberRepo: MemberRepository;

    constructor() {
        this.memberRepo = new MemberRepository();
    }

    async createMember(newMember: MemberType) {
        const member = await this.memberRepo.findUserByEmail(newMember.email);
        try{
            if(member)
                throw createHttpError(400, "Email already exists");
            const saltHash = await bcrypt.genSalt(12);
            const encryptedPass = await bcrypt.hash(newMember.password as string, saltHash);
            newMember.password = encryptedPass;
            return await this.memberRepo.createMember(newMember);
        }catch(err){
            throw err;
        }
    }
}