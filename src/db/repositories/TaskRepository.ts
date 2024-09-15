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
        let newTask = this.taskRepo.create(new Task());
        const {name, description, memberId} = task;
        newTask = {...newTask, name, description, memberId: memberId as string};
        return await this.taskRepo.save(newTask);
    }

    async getAllTasks() {
        return await this.taskRepo.find();
    }

    async getTaskById(id: string) {
        const task = await this.taskRepo.findOneBy({id});
        return task;
    }

    async updateTask(task: TaskType) {
        let getTask = await this.taskRepo.findOneBy({id: task.id}) as Task;
        getTask = {...getTask, name: (task.name ? task.name : getTask.name), 
                    description: (task.description ? task.description : getTask.description), 
                    finished: (task.finished ? task.finished : getTask.finished),
                    finishedAt: (task.finished ? (new Date().toISOString().slice(0, 19).replace('T', ' ')) : getTask.finishedAt), 
                    priority: (task.priority ? task.priority : getTask.priority)};
        return await this.taskRepo.save(getTask);
    }

    async deleteAllUserTasks(memberId: string) {
        return await this.taskRepo.delete({memberId});
    }

    async deleteTask(id: string) {
        return await this.taskRepo.delete({id});
    }
}