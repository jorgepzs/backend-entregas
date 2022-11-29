import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateAllTables1669687331525 implements MigrationInterface {
  name = "CreateAllTables1669687331525";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "clients" ("id" SERIAL NOT NULL, "name" text NOT NULL, "password" text NOT NULL, CONSTRAINT "UQ_99e921caf21faa2aab020476e44" UNIQUE ("name"), CONSTRAINT "PK_f1ab7cf3a5714dbc6bb4e1c28a4" PRIMARY KEY ("id"))`
    );
    await queryRunner.query(
      `CREATE TABLE "deliveries" ("id" SERIAL NOT NULL, "item_name" text NOT NULL, "client_id" integer NOT NULL, "deliveryman_id" integer NOT NULL, CONSTRAINT "UQ_40f921e26667637650ad149457d" UNIQUE ("client_id"), CONSTRAINT "UQ_8508bc8e9e19065ead8b55f91b4" UNIQUE ("deliveryman_id"), CONSTRAINT "PK_a6ef225c5c5f0974e503bfb731f" PRIMARY KEY ("id"))`
    );
    await queryRunner.query(
      `CREATE TABLE "deliverymans" ("id" SERIAL NOT NULL, "username" text NOT NULL, "password" text NOT NULL, CONSTRAINT "UQ_8b3724377d66a26bab38d336ce9" UNIQUE ("username"), CONSTRAINT "PK_28630b9dfda76d579c2350eb3c2" PRIMARY KEY ("id"))`
    );
    await queryRunner.query(
      `ALTER TABLE "deliveries" ADD CONSTRAINT "FK_40f921e26667637650ad149457d" FOREIGN KEY ("client_id") REFERENCES "clients"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`
    );
    await queryRunner.query(
      `ALTER TABLE "deliveries" ADD CONSTRAINT "FK_8508bc8e9e19065ead8b55f91b4" FOREIGN KEY ("deliveryman_id") REFERENCES "deliverymans"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "deliveries" DROP CONSTRAINT "FK_8508bc8e9e19065ead8b55f91b4"`
    );
    await queryRunner.query(
      `ALTER TABLE "deliveries" DROP CONSTRAINT "FK_40f921e26667637650ad149457d"`
    );
    await queryRunner.query(`DROP TABLE "deliverymans"`);
    await queryRunner.query(`DROP TABLE "deliveries"`);
    await queryRunner.query(`DROP TABLE "clients"`);
  }
}
