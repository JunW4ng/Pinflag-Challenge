import models from "../models/index.js";
import BaseController from "./base.js";
import getCharacters from "../utils/clients/rick-morty.client.js";

export default class CharacterController extends BaseController {
  CharacterController() {}

  // TODO  agregar  objeto info contador pagesnull
  async index(req, res) {
    const { num } = req.params;
    try {
      const arrayNum = Array.from({ length: num }, (_, i) => i + 1);
      const characterArray = [];

      await getCharacters(arrayNum).then((data) => {
        data.forEach((char) => {
          characterArray.push({
            name: char.name,
            status: char.status,
            species: char.species,
            origin: char.origin.name,
          });
        });
      });
      return super.Success(res, characterArray);
    } catch (err) {
      if (err) super.InternalError(res, err);
    }
  }

  async create(req, res) {
    try {
      const { num } = req.params;
      const characterData = [];

      await getCharacters(num)
        .then((data) => {
          data.forEach((char) => {
            characterData.push({
              name: char.name,
              status: char.status,
              species: char.species,
              origin: char.origin.name,
            });
          });
        })
        .then(() => {
          const { name, status, species, origin } = characterData[0];
          models.create({
            name: name,
            status: status,
            species: species,
            origin: origin,
          });
        });
      return super.Success(res, "");
    } catch (err) {
      return super.InternalError(res, err);
    }
  }

  async show(req, res) {
    return super.Success(res, "");
  }
}
