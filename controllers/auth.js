import { response } from 'express';
import bcrypt from 'bcryptjs';
import User from '../models/User.js';

const createUser = async( req, res = response ) => {

  const { email, password } = req.body;

  try {
    let user = await User.findOne({ email });

      if ( user ) {
        return res.status( 400 ).json({
          ok: false,
          msg: 'User already exists',
        });
      };

    user = new User( req.body );

    // Encriptar contraseña
    const salt = bcrypt.genSaltSync();
    user.password =  bcrypt.hashSync( password, salt );
  
    // Guardar usuario
    await user.save();
  
    res.status( 201 ).json({
      ok: true,
      uid: user.id,
      name: user.name,
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