import { response } from 'express';
import User from '../models/User.js';

const createUser = async( req, res = response ) => {

  // const { name, email, password } = req.body;

  try {
    const user = new User( req.body );
  
    // Guardar usuario
    await user.save();
  
    res.status( 201 ).json({
      ok: true,
      msg: 'Register',
    });
  } catch ( error ) {
    console.log( error );
    res.status( 500 ).json({
      ok: false,
      msg: 'Contact administrator',
    });
  };
};

const loginUser = ( req, res = response ) => {

  const { email, password } = req.body;

  res.json({
    ok: true,
    msg: 'Login',
    email,
    password,
  });
};


const revalidateToken = ( req, res = response ) => {
  res.json({
    ok: true,
    msg: 'Renew'
  });
};

export { createUser, loginUser, revalidateToken };