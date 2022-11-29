import { Router } from "express";
import { validatename } from "./middleares/validateName";

const routes = Router();

//Create User

routes.post("/client", validatename);
export default routes;
