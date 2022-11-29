import { Client } from "../dataBase/entities/Clients";
import { AppDataSource } from "./../dataBase/data-source";

export const ClientRepository = AppDataSource.getRepository(Client);
