import { TaskRepository } from "../db/repositories/TaskRepository";
import { TaskType } from "../types/TaskType";

export class TaskService {
    private taskRepo: TaskRepository;

    constructor() {
        this.taskRepo = new TaskRepository();
    }

    async createTask(task: TaskType) {
        try{
            return await this.taskRepo.createTask(task);
        }catch(err){
            throw err;
        }
    }

    async getTaskById(id: string) {
        try{
            return await this.taskRepo.getTaskById(id);
        }catch(err){
            throw err;
        }
    }

    async deleteTask(id: string) {
        try{
            return await this.taskRepo.deleteTask(id);
        }catch(err){
            throw(err);
        }
    }

    async updateTask(taskInfo: TaskType) {
        try {
            return await this.taskRepo.updateTask(taskInfo);
        }catch(err){
            throw(err);
        }
    }
}