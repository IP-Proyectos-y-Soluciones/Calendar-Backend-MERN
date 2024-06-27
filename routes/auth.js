/*
  Rutas de Usuarios / Auth
  host + /api/auth
*/
import { Router } from 'express';
import { check } from 'express-validator';
import { validateFields } from '../middlewares/validate-fields.js';
import { createUser, loginUser, revalidateToken } from '../controllers/auth.js';

const router = Router();

router.post( 
  '/new', 
  [ // middlewares
    check( 'name', 'The name is required' ).not().isEmpty(),
    check( 'email', 'Email is mandatory' ).isEmail(),
    check( 'password', 'The password must be 6 characters' ).isLength({ min: 6 }),
    validateFields
  ],
  createUser
);

router.post( 
  '/', 
  [
    check( 'email', 'Email is mandatory' ).isEmail(),
    check( 'password', 'The password must be 6 characters' ).isLength({ min: 6 }),
    validateFields
  ],
  loginUser 
);

router.get( 
  '/renew', 
  revalidateToken 
);

export default router;