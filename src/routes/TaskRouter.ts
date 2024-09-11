import express from "express";
import { TaskController } from "../controllers/TaskController";
import { authenticatorHandler } from "../middlewares/AuthHandler";

const taskController = new TaskController();
const router = express.Router();

router.post('/task/new', authenticatorHandler, taskController.createTask.bind(taskController));
router.get('/task/:id', authenticatorHandler, taskController.getTaskById.bind(taskController));
router.delete('/task/:id', authenticatorHandler, taskController.deleteTask.bind(taskController));
router.put('/task/:id', authenticatorHandler, taskController.updateTask.bind(taskController));

export default router;