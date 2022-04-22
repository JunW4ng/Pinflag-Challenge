import models from "../models/index.js";
import BaseController from "./base.js";
import getCharacters from "../utils/clients/rick-morty.client.js";
import getCharaterByName from "../utils/clients/rick-morty-by-name.client.js";

export default class CharacterController extends BaseController {
  CharacterController() {}

  // Returns characters
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
      return super.Success(res, [
        {
          info: { count: characterArray.length, pages: null },
          results: characterArray,
        },
      ]);
    } catch (err) {
      return super.InternalError(res, err);
    }
  }

  // Create a character
  async create(req, res) {
    try {
      const { name, status, species, origin } = req.body;
      const createCharacter = await models.create({
        name: name,
        status: status,
        species: species,
        origin: origin,
      });
      return super.Success(res, createCharacter);
    } catch (err) {
      return super.InternalError(res, err);
    }
  }

  // Find a character
  async show(req, res) {
    try {
      const { name } = req.query;
      const findCharacter = await models.findAll({
        attributes: ["name", "status", "species", "origin"],
        where: {
          name: name,
        },
      });

      if (findCharacter.length === 0) {
        try {
          const characterFound = [];
          await getCharaterByName(name).then((data) => {
            data.forEach((char) => {
              characterFound.push({
                name: char.name,
                status: char.status,
                species: char.species,
                origin: char.origin.name,
              });
            });
          });
          return super.Success(res, characterFound);
        } catch (err) {
          return super.NotFound(res, err);
        }
      }
      return super.Success(res, findCharacter);
    } catch (err) {
      return super.NotFound(res, err);
    }
  }
}
