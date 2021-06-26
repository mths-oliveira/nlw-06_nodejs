import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateCompliment1624674198938 implements MigrationInterface {
    name = 'CreateCompliment1624674198938'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "compliments" ("id" varchar PRIMARY KEY NOT NULL, "created_at" varchar NOT NULL DEFAULT ('now()'), "updated_at" varchar NOT NULL DEFAULT ('now()'), "user_sender" varchar NOT NULL, "user_receiver" varchar NOT NULL, "tag_id" varchar NOT NULL, "message" varchar NOT NULL)`);
        await queryRunner.query(`CREATE TABLE "temporary_compliments" ("id" varchar PRIMARY KEY NOT NULL, "created_at" varchar NOT NULL DEFAULT ('now()'), "updated_at" varchar NOT NULL DEFAULT ('now()'), "user_sender" varchar NOT NULL, "user_receiver" varchar NOT NULL, "tag_id" varchar NOT NULL, "message" varchar NOT NULL, CONSTRAINT "FK_cd4e6c54f85a02905a11897e91e" FOREIGN KEY ("user_sender") REFERENCES "users" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION, CONSTRAINT "FK_47922731571b285347daed32941" FOREIGN KEY ("user_receiver") REFERENCES "users" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION, CONSTRAINT "FK_3e32d250792f1db0b4dde4bc90a" FOREIGN KEY ("tag_id") REFERENCES "tags" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION)`);
        await queryRunner.query(`INSERT INTO "temporary_compliments"("id", "created_at", "updated_at", "user_sender", "user_receiver", "tag_id", "message") SELECT "id", "created_at", "updated_at", "user_sender", "user_receiver", "tag_id", "message" FROM "compliments"`);
        await queryRunner.query(`DROP TABLE "compliments"`);
        await queryRunner.query(`ALTER TABLE "temporary_compliments" RENAME TO "compliments"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "compliments" RENAME TO "temporary_compliments"`);
        await queryRunner.query(`CREATE TABLE "compliments" ("id" varchar PRIMARY KEY NOT NULL, "created_at" varchar NOT NULL DEFAULT ('now()'), "updated_at" varchar NOT NULL DEFAULT ('now()'), "user_sender" varchar NOT NULL, "user_receiver" varchar NOT NULL, "tag_id" varchar NOT NULL, "message" varchar NOT NULL)`);
        await queryRunner.query(`INSERT INTO "compliments"("id", "created_at", "updated_at", "user_sender", "user_receiver", "tag_id", "message") SELECT "id", "created_at", "updated_at", "user_sender", "user_receiver", "tag_id", "message" FROM "temporary_compliments"`);
        await queryRunner.query(`DROP TABLE "temporary_compliments"`);
        await queryRunner.query(`DROP TABLE "compliments"`);
    }

}
