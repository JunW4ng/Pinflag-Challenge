import { DataTypes, Op } from "sequelize";
import sequelize from "../config/sequelize.js";
import Character from "../models/character_model.js";

const models = Character(sequelize, DataTypes);

export { sequelize, Op };
export default models;
