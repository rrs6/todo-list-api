import express from "express";
import { TaskController } from "../controllers/TaskController";

const taskController = new TaskController();
const router = express.Router();

router.post('/task/new', taskController.createTask.bind(taskController));
router.get('/task/:id', taskController.getTaskById.bind(taskController));
router.delete('/task/:id', taskController.deleteTask.bind(taskController));
router.put('/task/:id', taskController.updateTask.bind(taskController));

export default router;