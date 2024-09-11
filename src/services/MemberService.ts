import createHttpError from "http-errors";
import { MemberRepository } from "../db/repositories/MemberRepository";
import { MemberType } from "../types/MemberType";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export class MemberService {
    private memberRepo: MemberRepository;

    constructor() {
        this.memberRepo = new MemberRepository();
    }

    async createMember(newMember: MemberType) {
        const member = await this.memberRepo.findMemberByEmail(newMember.email);
        try{
            if(member)
                throw createHttpError(409, "member already exists");
            const saltHash = await bcrypt.genSalt(12);
            const encryptedPass = await bcrypt.hash(newMember.password as string, saltHash);
            newMember.password = encryptedPass;
            return await this.memberRepo.createMember(newMember);
        }catch(err){
            throw err;
        }
    }

    async deleteMember(id: string) {
        try {
            const member = await this.memberRepo.findMemberById(id);
            if(!member)
                throw createHttpError(404, "member not found");
            return await this.memberRepo.deleteMember(id);
        }catch(err){
            throw err;
        }
    }

    async signInMember(email: string, password: string) {
        try{
            const member = await this.memberRepo.findMemberByEmail(email);
            if(!member)
                throw createHttpError(404, 'member not found');
            const checkPassword = await bcrypt.compare(password, member.password);
            if(!checkPassword)
                throw createHttpError(401, 'unauthorized');
            const secret = process.env.SECRET as string;
            const refreshSecret = process.env.REFRESH_SECRET as string;
            const token = jwt.sign({"id": member.id}, secret, {expiresIn: '5m'});
            const refreshToken = jwt.sign({"id": member.id}, refreshSecret, {expiresIn: '25m'});
            return {token, refreshToken};
        }catch(err){
            throw err;
        }
    }
}