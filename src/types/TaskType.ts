export type TaskType = {
    id?: string,
    name: string,
    description: string,
    finished: boolean,
    finishedAt?: string,
    priority?: number
}