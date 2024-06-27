import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { dbConnection } from './database/config.js';
import authRouter from './routes/auth.js';


dotenv.config();

// Crear el servidor de express
const app = express();

// Base de datos
dbConnection();

// CORS
app.use( cors({ origin: true }) );

// Directorio Público
app.use( express.static( 'public' ) );

// Lectura y parseo del body
app.use( express.json() );

// Rutas
app.use( '/api/auth', authRouter );
// TODO: CRUD: Eventos

// Escuchar peticiones
const PORT = process.env.PORT || 3000;
app.listen( PORT, () => {
  console.log( `Server running on port ${ PORT }` );
});

