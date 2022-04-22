import app from "express";
import CharacterController from "../controllers/character_controller.js";

const routes = app.Router();

routes.get("/index/:num", new CharacterController().index);
routes.post("/create", new CharacterController().create);
routes.get("/show", new CharacterController().show);

export default routes;
