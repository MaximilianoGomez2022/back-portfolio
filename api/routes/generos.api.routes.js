import express from 'express';
import *as GenerosApiController from '../controllers/generos.api.controllers.js'
import { isLogin, isAdmin } from '../../middleware/auth.middleware.js';

const route = express.Router()

route.route('/api/generos')
.get(GenerosApiController.findall)
.post([isLogin, isAdmin], GenerosApiController.crearGenero)

route.route('/api/generos/:id')
.get(GenerosApiController.findById)
.patch([isLogin, isAdmin],GenerosApiController.editById)
.put([isLogin, isAdmin],GenerosApiController.replaceById)
.delete([isLogin, isAdmin],GenerosApiController.deleteById)

export default route