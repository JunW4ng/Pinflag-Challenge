import app from "express";
// ? import asyncHandler from 'express-async-handler'
import CharacterController from "../controllers/character_controller.js";

const routes = app.Router();

// TODO  CREATE ROUTES
routes.get("/index/:num", new CharacterController().index);
routes.post("/create", new CharacterController().create);
routes.get("/show", new CharacterController().show);

export default routes;
