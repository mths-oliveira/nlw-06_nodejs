import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateUsers1624661757736 implements MigrationInterface {
    name = 'CreateUsers1624661757736'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "users" ("id" varchar PRIMARY KEY NOT NULL, "created_at" varchar NOT NULL DEFAULT ('now()'), "updated_at" varchar NOT NULL DEFAULT ('now()'), "name" varchar NOT NULL, "email" varchar NOT NULL, "admin" boolean NOT NULL, "password" varchar NOT NULL)`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "users"`);
    }

}
