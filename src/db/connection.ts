import { DataSource } from "typeorm";

export const dataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "user",
    password: "userpassword",
    database: "todo-db",
    entities: ["./src/db/entities/*.ts"],
    migrations: ["./src/db/migrations/*.ts"],
    synchronize: false
})