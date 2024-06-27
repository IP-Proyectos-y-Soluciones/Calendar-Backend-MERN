import express from 'express';


// Crear el servidor de express
const app = express();


// Rutas
app.use( '/', ( req, res ) => {
  res.json({
    ok: true,
  });
});

// Escuchar peticiones
app.listen( 4000, () => {
  console.log( `Server running on port ${ 4000 }` );
});

