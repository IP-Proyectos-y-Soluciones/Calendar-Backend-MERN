import express from 'express';
import dotenv from 'dotenv';
import authRouter from './routes/auth.js';


dotenv.config();

// Crear el servidor de express
const app = express();

// Directorio Público
app.use( express.static( 'public' ) );


// Rutas
app.use( '/api/auth', authRouter );
// TODO: CRUD: Eventos

// Escuchar peticiones
const PORT = process.env.PORT || 3000;
app.listen( PORT, () => {
  console.log( `Server running on port ${ PORT }` );
});

