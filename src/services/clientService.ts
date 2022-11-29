import { hash } from "bcryptjs";
import { ClientRepository } from "./../repositories/ClientRepository";
interface PayloadCreateClient {
  [x: string]: any;
  name: string;
  password: string;
}

export class ClientService {
  async create(password, name: PayloadCreateClient) {
    try {
      const verifyNameAlredyInUse = await ClientRepository.findBy(name);

      if (verifyNameAlredyInUse) {
        return new Error(`The Name ${name} alredy in Use`);
      }
      const trimPassword = password.trim();
      const hashPassword = await hash(trimPassword, 10);
      const trimName = name.trim();

      const createClient = ClientRepository.create({
        name: trimName,
        password: hashPassword,
      });

      if (!createClient) {
        return new Error("registration failed");
      }

      await ClientRepository.save(createClient);
      //remove password of return
      createClient.password = undefined;

      return createClient;
    } catch (error) {
      console.log(error);
    }
  }
}
