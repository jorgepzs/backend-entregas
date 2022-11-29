import { Deliveryman } from "./Deliveryman";
import { Client } from "./Clients";
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from "typeorm";

@Entity("deliveries")
export class Deliverie {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "text" })
  item_name: string;

  @ManyToOne(() => Client)
  @JoinColumn({ name: "client_id" })
  @Column({ type: "text", unique: true })
  client_id: Client;

  @ManyToOne(() => Deliveryman)
  @JoinColumn({ name: "deliveryman_id" })
  @Column({ type: "text", unique: true })
  deliveryman_id: Deliveryman;
}
