import { Deliverie } from "./Deliveries";
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";

@Entity("deliverymans")
export class Deliveryman {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "text", unique: true })
  username: string;

  @Column({ type: "text" })
  password: string;

  @OneToMany(() => Deliverie, (deliverie) => deliverie.deliveryman_id)
  deliveries: Deliverie[];
}
