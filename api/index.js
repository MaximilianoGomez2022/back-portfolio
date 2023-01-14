import express from 'express';
import cors from 'cors';

import PeliculasRoute from './routes/peliculas.api.routes.js';

const app = express()

app.use(cors())
app.use(express.json())

app.use('/', PeliculasRoute)

export default app