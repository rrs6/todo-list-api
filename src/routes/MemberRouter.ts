import express from "express";
import { MemberController } from "../controllers/MemberController";

const router = express.Router();
const memberController = new MemberController();

router.post('/login', memberController.signInMember.bind(memberController));
router.post('/member/new', memberController.createMember.bind(memberController));
router.delete('/member/:id', memberController.deleteMember.bind(memberController));

export default router;