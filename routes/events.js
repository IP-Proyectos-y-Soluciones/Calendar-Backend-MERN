/*
    Event Routes
    /api/events
*/
import { Router } from 'express';
import { validateJWT } from '../middlewares/validate-jwt.js';
import { createEvent, deleteEvent, getEvents, updateEvent } from '../controllers/events.js';


const router = Router();

// Todas tienen que pasar por la validación del JWT
router.use( validateJWT );

// Obtener eventos
router.get( '/', getEvents );

// Crear un nuevo evento
router.post( '/', createEvent );

// Actualizar Evento
router.put( '/:id', updateEvent );

// Borrar evento
router.delete( '/:id', deleteEvent );


export default router;