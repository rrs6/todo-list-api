import express from "express";
import { MemberController } from "../controllers/MemberController";

const router = express.Router();
const memberController = new MemberController();

router.post('/member/new', memberController.createMember.bind(memberController));
router.delete('/member/:id', );
router.put('/member/:id',);

export default router;