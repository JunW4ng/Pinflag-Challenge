import app from 'express'

import Home from './home_routes.js'
import Character from './character_routes.js'

const routes = app.Router()

routes.use('/', Home)
routes.use('/character', Character)

export default routes
