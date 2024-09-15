export type TaskType = {
    id?: string,
    name: string,
    description: string,
    memberId?: string,
    finished: boolean,
    finishedAt?: string,
    priority?: number
}