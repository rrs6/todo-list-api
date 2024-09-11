import { Repository } from "typeorm";
import { TaskType } from "../../types/TaskType";
import { Task } from "../entities/Task";
import { dataSource } from "../connection";

export class TaskRepository {
    private taskRepo: Repository<Task>;
    constructor() {
        this.taskRepo = dataSource.getRepository(Task);
    }

    async createTask(task: TaskType) {

    }
}