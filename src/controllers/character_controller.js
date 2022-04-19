import axios from 'axios'
// import models from '../models'
import BaseController from './base.js'

// ? Todos los personajes segun numero
const getCharacters = async (arrayNum) => {
  const { data } = await axios.get(
    `https://rickandmortyapi.com/api/character/${arrayNum}`
  )
  return data
}

export default class CharacterController extends BaseController {
  CharacterController () {}

  async index (req, res) {
    try {
      const { num } = req.params
      const arrayNum = Array.from({ length: num }, (_, i) => i + 1)
      const characterArray = []

      await getCharacters(arrayNum).then((data) => {
        data.forEach((ch) => {
          characterArray.push({
            name: ch.name,
            status: ch.status,
            species: ch.species,
            origin: ch.origin.name
          })
        })
      })
      return super.Success(res, characterArray)
    } catch (err) {
      console.log(err)
    }
  }

  async create (req, res) {
    return super.Success(res, '')
  }

  async show (req, res) {
    return super.Success(res, '')
  }
}
