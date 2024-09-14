import express from "express";
import { TaskController } from "../controllers/TaskController";
import { basicAuthHandler } from "../middlewares/BasicAuthHandler";
import { authenticatorHandler } from "../middlewares/AuthHandler";

const taskController = new TaskController();
const router = express.Router();

router.post('/task/new', basicAuthHandler, taskController.createTask.bind(taskController));
router.get('/task/all', taskController.getAllTasks.bind(taskController))
router.get('/task/:id', basicAuthHandler, taskController.getTaskById.bind(taskController));
router.delete('/task/:id', authenticatorHandler, taskController.deleteTask.bind(taskController));
router.put('/task/:id', authenticatorHandler, taskController.updateTask.bind(taskController));

export default router;