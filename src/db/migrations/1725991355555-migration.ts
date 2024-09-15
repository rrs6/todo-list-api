import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class Migration1725991355555 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'task',
            columns: [
                {
                    name: 'id',
                    type: 'varchar',
                    isPrimary: true,
                },
                {
                    name: 'name',
                    type: 'varchar',
                    isNullable: false,
                    length: '50'
                },
                {
                    name: 'description',
                    type: 'varchar',
                    length: '140'
                },
                {
                    name: 'finished',
                    type: 'boolean',
                    default: false
                },
                {
                    name: 'memberId',
                    type: 'varchar'
                },
                {
                    name: 'finishedAt',
                    type: 'timestamp',
                    isNullable: true
                },
                {
                    name: 'priority',
                    type: 'int',
                    default: 0
                }
            ],foreignKeys: [
                {
                    name: "fk_member_id",
                    columnNames: ["memberId"],
                    referencedTableName: "member",
                    referencedColumnNames: ["id"]
                }
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('task');
    }

}
