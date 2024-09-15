import { Response, Request, NextFunction } from "express";
import { MemberService } from "../services/MemberService";
import { MemberType } from "../types/MemberType";

export class MemberController {
    private memberService: MemberService;
    constructor() {
        this.memberService = new MemberService();
    }

    async createMember(req: Request, res: Response, next: NextFunction) {
        const {name, email, password} = req.body;
        try{
            const member: MemberType = {name, email, password};
            const user = await this.memberService.createMember(member);
            return res.status(201).json({"msg": "user created"});
        }catch(err){
            next(err);
        }
    }

    async deleteMember(req: Request, res: Response, next: NextFunction) {
        const { id } = req.params;
        try {
            await this.memberService.deleteMember(id);
            return res.status(200).json({"msg": `member with id ${id} was deleted`});
        }catch(err){
            next(err);
        }
    }

    async signInMember(req: Request, res: Response, next: NextFunction) {
        const {email, password} = req.body;
        try {
            const {token, member} = await this.memberService.signInMember(email, password);
            return res.status(200).json({token, member: {id: member.id, name: member.name, email: member.email}});
        }catch(err){
            next(err);
        }
    }
}