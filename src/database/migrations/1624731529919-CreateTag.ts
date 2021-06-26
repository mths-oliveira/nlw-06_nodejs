import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateTag1624731529919 implements MigrationInterface {
    name = 'CreateTag1624731529919'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "tags" ("id" varchar PRIMARY KEY NOT NULL, "created_at" varchar NOT NULL DEFAULT ('now()'), "updated_at" varchar NOT NULL DEFAULT ('now()'), "name" varchar NOT NULL)`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "tags"`);
    }

}
