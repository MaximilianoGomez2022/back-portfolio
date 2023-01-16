import express from 'express';
import cors from 'cors';

import PeliculasRoute from './routes/peliculas.api.routes.js';
import GenerosRoute from './routes/generos.api.routes.js';
import UserRoute from './routes/users.api.routes.js';

const app = express()

app.use(cors())
app.use(express.json())

app.use('/', PeliculasRoute)
app.use('/', GenerosRoute)
app.use('/', UserRoute)

export default app