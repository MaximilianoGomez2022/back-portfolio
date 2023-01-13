import express from "express"
import *as PeliculasApiController from '../controllers/peliculas.api.controllers.js'
import { isLogin, isAdmin } from "../../middleware/auth.middleware.js"

const route = express.Router()

route.route('/api/peliculas')
.get(PeliculasApiController.findall)
.post([isLogin, isAdmin],PeliculasApiController.crearPelicula)

route.route('/api/peliculas/:id')
.get([isLogin],PeliculasApiController.findById)
.patch([isLogin, isAdmin],PeliculasApiController.editById)
.put([isLogin, isAdmin],PeliculasApiController.replaceById)
.delete([isLogin, isAdmin],PeliculasApiController.deleteById)

export default route
