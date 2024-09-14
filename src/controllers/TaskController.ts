import { NextFunction, Request, Response } from "express";
import { TaskService } from "../services/TaskService";
import { TaskType } from "../types/TaskType";
import createHttpError from "http-errors";

export class TaskController {
    private taskService: TaskService;
    constructor() {
        this.taskService = new TaskService();
    }

    async createTask(req: Request, res: Response, next: NextFunction) {
        const {name, description, priority} = req.body;
        try {
            const task: TaskType = { name, description, priority, finished: false };
            const newTask = await this.taskService.createTask(task);
            return res.status(201).json({"msg": "task created"});
        }catch(err){
            next(err);
        }
    }

    async getAllTasks(req: Request, res: Response, next: NextFunction) {
        console.log("sashdiahsdiahi");
        try {
            const tasks = await this.taskService.getAllTasks();
            return res.status(200).json(tasks);
        }catch(err){
            next(err);
        }
    }

    async deleteTask(req: Request, res: Response, next: NextFunction) {
        const {id} = req.params;
        try {
            const task = await this.taskService.getTaskById(id);
            if(!task)
                throw createHttpError(404, "not found");
            await this.taskService.deleteTask(id);
            return res.status(200).json({"msg": "task deleted"});
        }catch(err){
            next(err);
        }
    }

    async getTaskById(req: Request, res: Response, next: NextFunction) {
        const {id} = req.params;
        try {
            const task = await this.taskService.getTaskById(id);
            if(!task)
                throw createHttpError(404, "not found");
            return res.status(200).json(task);
        }catch(err){
            next(err);
        }
    }

    async updateTask(req: Request, res: Response, next: NextFunction) {
        const {id, name, description, finished, priority} = req.body;
        try {
            const task = await this.taskService.getTaskById(id);
            if(!task)
                throw createHttpError(404, "not found");
            let newInformationTask: TaskType = {id, name, description, finished, priority};
            await this.taskService.updateTask(newInformationTask);
            return res.status(200).json({"msg": "task updated"});
        }catch(err){
            next(err);
        }
    }
}