/*
    Event Routes
    /api/events
*/
import { Router } from 'express';
import { check } from 'express-validator';

import { isDate } from '../helpers/isDate.js';
import { validateFields } from '../middlewares/validate-fields.js';
import { validateJWT } from '../middlewares/validate-jwt.js';
import { createEvent, deleteEvent, getEvents, updateEvent } from '../controllers/events.js';


const router = Router();

// Todas tienen que pasar por la validación del JWT
router.use( validateJWT );

// Obtener eventos
router.get( '/', getEvents );

// Crear un nuevo evento
router.post( 
  '/', 
  [
    check( 'title', 'Title is required' ).not().isEmpty(),
    check( 'start', 'Start date is mandatory' ).custom( isDate ),
    check( 'end', 'End date is required' ).custom( isDate ),
    validateFields
  ],
  createEvent 
);

// Actualizar Evento
router.put( 
  '/:id', 
  [
    check( 'title', 'Title is required' ).not().isEmpty(),
    check( 'start', 'Start date is mandatory' ).custom( isDate ),
    check( 'end', 'End date is required' ).custom( isDate ),
    validateFields
  ],
  updateEvent 
);

// Borrar evento
router.delete( '/:id', deleteEvent );


export default router;