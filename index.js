import express from 'express';
import dotenv from 'dotenv';


dotenv.config();

// Crear el servidor de express
const app = express();

// Directorio Público
app.use( express.static( 'public' ) );


// Rutas
// app.use( '/', ( req, res ) => {
//   res.json({
//     ok: true,
//   });
// });

// Escuchar peticiones
const PORT = process.env.PORT || 3000;
app.listen( PORT, () => {
  console.log( `Server running on port ${ PORT }` );
});

