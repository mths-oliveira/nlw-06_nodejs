import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateTags1624673937586 implements MigrationInterface {
    name = 'CreateTags1624673937586'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "tags" ("id" varchar PRIMARY KEY NOT NULL, "created_at" varchar NOT NULL DEFAULT ('now()'), "updated_at" varchar NOT NULL DEFAULT ('now()'), "name" varchar NOT NULL)`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "tags"`);
    }

}
